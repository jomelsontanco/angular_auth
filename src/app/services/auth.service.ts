import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string = "https://localhost:7125/api/User/"
  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseURL}register`, userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseURL}authenticate`, loginObj);
  }
}
