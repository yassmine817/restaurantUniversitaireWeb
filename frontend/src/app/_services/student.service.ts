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
export class StudentService {
  selectedStudent: student;
  User: student[];

  AUTH_API = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }


register(user): Observable<any> {
  return this.http.post(this.AUTH_API + '/addstudent', {
    fullname:user.fullname,
    username: user.username,
    email: user.email,
    password: user.password,
    cin:user.cin


  }, httpOptions);
}

getstudentList(){
  return this.http.get(this.AUTH_API);
}

getstudentListNot(){
  return this.http.get(this.AUTH_API + '/Notstudent');
}

get(_id: string, emp: student ) {
  return this.http.put(this.AUTH_API + `/ListstudentOne/${emp._id}`, emp);
}


putstudent(emp: student) {
  return this.http.put(this.AUTH_API + `/updatestudent/${emp._id}`, emp);
}




deletestudent(_id: string) {
  return this.http.delete(this.AUTH_API + `/delete/${_id}`);
}



}
