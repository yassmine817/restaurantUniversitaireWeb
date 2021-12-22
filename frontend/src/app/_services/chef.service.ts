import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from './student.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  selectedchef: student;
  User: student[];

  AUTH_API = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }


  register(user): Observable<any> {
  return this.http.post(this.AUTH_API + '/addchef', {
    username: user.username,
    email: user.email,
    password: user.password
  }, httpOptions);
  }

getchefList(){

  return this.http.get(this.AUTH_API +'/chefs');
}




}
