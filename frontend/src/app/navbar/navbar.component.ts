import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  private roles: string[];
  isLoggedIn = false;

  username: string;

  constructor(private tokenStorageService: TokenStorageService,private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
    this.currentUser = this.tokenStorageService.getUser();
  }

  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
   this.router.navigateByUrl('/');
  }
}
