import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  signup(data:any):Observable<any>{
 return this.http.post('http://localhost:5000/auth/register',data)
  }
  login(data:any){
    return this.http.post('http://localhost:5000/auth/register',data)
  }
  getProfile(){
  let headers ={
    'Authorization':"Bearer" + localStorage.getItem('token')
  }
  }
}
