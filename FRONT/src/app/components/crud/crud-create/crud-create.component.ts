import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/Crud/crud.service';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.css']
})
export class CrudCreateComponent implements OnInit {
  submitted = false;
  crudnameForm: FormGroup;
 

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.crudnameForm = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.crudnameForm.get('email').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.crudnameForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.crudnameForm.valid) {
      return false;
    } else {
      this.crudService.createCrudname(this.crudnameForm.value).subscribe(
        (res) => {
          console.log('Agent successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/CrudListComponent'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
