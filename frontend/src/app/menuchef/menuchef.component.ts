import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Menu } from '../_services/Menu.model';

@Component({
  selector: 'app-menuchef',
  templateUrl: './menuchef.component.html',
  styleUrls: ['./menuchef.component.css']
})
export class MenuchefComponent implements OnInit {
 
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(public menuservice:MenuService, private router: Router) { }




  ngOnInit() {
    this.MenuList();
  }



  MenuList() {
    this.menuservice.getMenuList().subscribe((res) => {
      this.menuservice.menu = res as Menu[];
    });
  }

}
