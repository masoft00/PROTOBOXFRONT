import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://127.0.0.1:3000/";
  pdfgen(data) {
    return this.http.post<any>(this.baseurl + '/pdf', data, { observe: 'response' });
  }
}
