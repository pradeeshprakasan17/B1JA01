import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/signup';

  signupRegister(userData : any){
    return this.http.post<any>(this.url, userData);
  }
}
