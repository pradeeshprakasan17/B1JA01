import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/login';

  loginService(loginData : any){
    return this.http.post<any>(this.url, loginData);
  }
}