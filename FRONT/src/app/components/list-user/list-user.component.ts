import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListUserService } from 'src/app/services/listUser/list-user.service';
import { AuthenticationModel } from 'src/app/services/Authentication/AuthenticationModel'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'edit', 'delete'];
  dataSource: MatTableDataSource<AuthenticationModel>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  Listeuser: AuthenticationModel[];
  lister: any;

  constructor(private ListUsers: ListUserService) { }
  users;

  ngOnInit(): void {

    this.ListUsers.getlisteusers().subscribe(
      (Listeuser: AuthenticationModel[]) => {
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
