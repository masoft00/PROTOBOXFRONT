import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private LogService: AuthenticationService, private router: Router) { }
  ngOnInit() {
  }
  //Cette methode me permet de se connecter à mon API
 
}
