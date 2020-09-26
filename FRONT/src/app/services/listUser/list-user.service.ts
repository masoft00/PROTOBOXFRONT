import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  id: number;
  email: string;
  password: string;

  Headers = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))}
  public host: string  = 'http://127.0.0.1:3000/lister'
  constructor(private http: HttpClient) { }
  
  //methode qui me permet de lister les partenaires
    getlisteusers(){
     return this.http.get(this.host,this.Headers);
  }
}
