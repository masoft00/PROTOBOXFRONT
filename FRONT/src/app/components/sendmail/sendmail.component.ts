import { Component, OnInit, Injectable } from '@angular/core';
import { SendmailService } from 'src/app/services/sendmail/sendmail.service';
import { Contact } from '../../services/sendmail/contactForm';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private sendService: SendmailService
  ) { }

  ngOnInit() {
  }
  
  onSend() {
  this.submitted = true;
    this.sendService.contactForm(this.model).subscribe(
    data => this.model = data,
    
    ); 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Message sent',
      showConfirmButton: false,
      timer: 1500
    })
    //Cette fonction per;et de rafléchir la page
    // function refresh() { window.location.reload(false);
    // }
    // refresh();
    // error => this.error = error
  }

}


