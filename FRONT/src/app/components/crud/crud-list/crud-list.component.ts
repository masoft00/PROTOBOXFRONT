import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CrudModel } from 'src/app/Model/crudModel';
import { CrudService } from 'src/app/services/Crud/crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  Crudname: any = [];

  constructor(
    private crudService: CrudService,
  
    ) {
    this.readCrudname();
  }


  isplayedColumns: string[] = ['id', 'prenom', 'nom', 'edit', 'delete'];
  dataSource: MatTableDataSource<CrudModel>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ListeElementCrud: CrudModel[];
  lister: any;
  cruds;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {

    this.crudService.getCrudnames().subscribe(
      (Listeuser: CrudModel[]) => {
        this.cruds = Listeuser;
        this.dataSource = new MatTableDataSource(this.cruds);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        console.log(err);
      })
  }

  readCrudname() {
    this.crudService.getCrudnames().subscribe((data) => {
      this.Crudname = data;
    })
  }

  removeCrudname(agent, index) {
    if (window.confirm('Are you sure?')) {
      this.crudService.deleteCrudname(agent._id).subscribe((data) => {
        this.Crudname.splice(index, 1);
      }
      )
    }
  }


 

}
