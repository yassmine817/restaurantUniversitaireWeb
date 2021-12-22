import { student } from './../_services/student.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './../_services/student.service';
declare var M: any;
@Component({
  selector: 'app-acceptedstudents',
  templateUrl: './acceptedstudents.component.html',
  styleUrls: ['./acceptedstudents.component.css']
})
export class AcceptedstudentsComponent implements OnInit {


  constructor(public StudentService: StudentService) { }

  ngOnInit(): void {
    this.StudentList();
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.StudentService.selectedStudent= {
      _id:"",
      fullname:"",
      username: "",
     email: "",
     password:"",
     cin:"",
     statut:""

    }
  }


  onSubmit(studentForm:NgForm){
    if (studentForm.value._id == "") {

      this.StudentService.putstudent(studentForm.value).subscribe((res) => {
        this.resetForm(studentForm);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  StudentList() {
    this.StudentService.getstudentList().subscribe((res) => {
      this.StudentService.User = res as student[];
    });
  }

  getOne(_id,emp)
  {

    this.StudentService.get(_id,emp).subscribe(data=>{

      this.StudentService.User =data as student[];;
    });
  }

  refreshEmployeeList() {
    this.StudentService.getstudentList().subscribe((res) => {
      this.StudentService.User = res as student[];
    });
  }
  onEdit(emp: student) {
    this.StudentService.selectedStudent = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.StudentService.deletestudent(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
