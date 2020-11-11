import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  Authentication: any = [];
  constructor(
    private authService: AuthenticationService,

  ) {
    this.readAuthentication();
  }
  ngOnInit() {

  }
  readAuthentication() {
    this.authService.getlisteusers().subscribe((data) => {
      this.Authentication = data;
    })
  }

 
}
