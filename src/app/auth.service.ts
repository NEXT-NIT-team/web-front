import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './types/user';
import { AuthResp } from './authResp';
import { Doctor } from './types/doctor';
const httpOptions = {
  Headers: new HttpHeaders({'Content-Type': 'application/json'}),
  responseType: 'text' as 'json'
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/v1';


  constructor(private http: HttpClient, private router : Router) { 
   
    } 
    public register (user:User<Doctor>): Observable<AuthResp>{
      return this.http.post<AuthResp>(`${this.apiUrl}/us`,user,httpOptions);
  }
}
