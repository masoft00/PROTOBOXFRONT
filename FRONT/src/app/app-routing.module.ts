
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/Authentication/log-in/log-in.component';
import { SendmailComponent } from './components/sendmail/sendmail.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CrudCreateComponent } from './components/crud/crud-create/crud-create.component';
import { CrudEditComponent } from './components/crud/crud-edit/crud-edit.component';
import { CrudListComponent } from './components/crud/crud-list/crud-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'navbar', component  : NavbarComponent },
  { path: 'footer', component  : FooterComponent },
  { path: 'login', component   : LogInComponent },
  { path: 'sendmail', component: SendmailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pdfGenerator', component: PdfGeneratorComponent },
  { path: 'ListUsers', component: ListUserComponent },
  { path: 'EditUsers/:id', component: EditUserComponent },
  { path: 'CrudCreateComponent', component: CrudCreateComponent },
  { path: 'CrudEditComponent/:id', component: CrudEditComponent },
  { path: 'CrudListComponent', component: CrudListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }