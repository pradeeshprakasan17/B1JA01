import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signupRegister(userData : any){
    return this.http.post<any>('http://localhost:8080/signup', userData);
  }
}
