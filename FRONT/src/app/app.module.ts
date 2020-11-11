//import { SendmailService } from 'src/app/services/sendmail/sendmail.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './material/angular-material.module';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarliComponent } from './components/navbarli/navbarli.component';
import { Navbarli2Component } from './components/navbarli2/navbarli2.component';
import { LogInComponent } from './components/Authentication/log-in/log-in.component';
import { SendmailComponent } from './components/sendmail/sendmail.component';
import { SendmailService } from './services/sendmail/sendmail.service';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CrudEditComponent } from './components/crud/crud-edit/crud-edit.component';
import { CrudCreateComponent } from './components/crud/crud-create/crud-create.component';
import { CrudListComponent } from './components/crud/crud-list/crud-list.component';
import { CrudService } from './services/Crud/crud.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NavbarliComponent,
    Navbarli2Component,
    LogInComponent,
    SendmailComponent,
    RegisterComponent,
    PdfGeneratorComponent,
    ListUserComponent,
    EditUserComponent,
    CrudEditComponent,
    CrudCreateComponent,
    CrudListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularMaterialModule,  
  ],
  providers: [SendmailService,CrudService],
  bootstrap: [AppComponent],
  schemas  : [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[RegisterComponent]
})

export class AppModule { }