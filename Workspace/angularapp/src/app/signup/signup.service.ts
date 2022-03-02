import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/signup';

  signupService(signupData : any){
    return this.http.post<any>(this.url, signupData);
  }
}
