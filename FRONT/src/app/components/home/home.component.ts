import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { MatPaginator } from '@angular/material/paginator';

import { MatDialog, MatTable } from '@angular/material';


export interface UserData {
  id:string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id','email','edit','delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  Listepartenair: UserData[];
  lister: any;

  constructor(private Listuser: AuthenticationService, private cdr: ChangeDetectorRef) { }
  users;
  ngOnInit(): void {

    this.Listuser.getlisteusers().subscribe(
      (Listeuser: UserData[]) => {
        this.users = Listeuser;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        console.log(err);
      })

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
