import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CrudService {



  baseUri: string = 'http://127.0.0.1:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createCrudname(data): Observable<any> {
    let url = `${this.baseUri}`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getCrudnames() {
    return this.http.get(`${this.baseUri}/getAll`);
  }

  // Get employee
  getCrudname(id): Observable<any> {
    let url = `${this.baseUri}/getOne/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateCrudname(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteCrudname(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    console.log('ok')
    return this.http.delete(url, { headers: this.headers }).pipe(
      
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
