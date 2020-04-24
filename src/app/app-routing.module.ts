
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/Authentication/log-in/log-in.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { SendmailComponent } from './components/sendmail/sendmail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nav', component: NavComponent },
  { path: 'sendmail', component: SendmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }