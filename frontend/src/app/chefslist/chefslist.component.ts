import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from './../_services/chef.service';
import { student } from './../_services/student.model';
declare var M: any;
@Component({
  selector: 'app-chefslist',
  templateUrl: './chefslist.component.html',
  styleUrls: ['./chefslist.component.css']
})
export class ChefslistComponent implements OnInit {

  constructor(private router: Router, public chefService: ChefService) { }

  ngOnInit() {
    this.StudentList();
  }


  submit()
  {
    this.router.navigate(['/addchef']);
  }

  StudentList() {

    this.chefService.getchefList().subscribe((res) => {
      this.chefService.User = res as student[];
    });
  }

}
