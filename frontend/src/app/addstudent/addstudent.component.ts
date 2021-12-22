import { StudentService } from './../_services/student.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(public StudentService: StudentService, private router: Router) { }


  ngOnInit() {

  }


  onSubmit() {
    this.StudentService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('../acceptedstudents');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }



}
