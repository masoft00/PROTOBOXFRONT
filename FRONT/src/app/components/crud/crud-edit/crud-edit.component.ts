import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudModel } from 'src/app/Model/crudModel';
import { CrudService } from 'src/app/services/Crud/crud.service';


@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.css']
})
export class CrudEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: CrudModel[];


  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private CrService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateCrudname();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCrudname(id);
    this.editForm = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      
     
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getCrudname(id) {
    this.CrService.getCrudname(id).subscribe(data => {
      this.editForm.setValue({
        prenom: data['prenom'],
        nom: data['nom'],
        adresse: data['adresse'],
        telephone: data['telephone']
        
      });
    });
  }

  updateCrudname() {
    this.editForm = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
    
    
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.CrService.updateCrudname(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/CrudListComponent');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
