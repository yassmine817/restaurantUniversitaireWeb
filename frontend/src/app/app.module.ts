import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent} from './user/user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceptedstudentsComponent } from './acceptedstudents/acceptedstudents.component';
import { StudentsnotaccepComponent } from './studentsnotaccep/studentsnotaccep.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ChefslistComponent } from './chefslist/chefslist.component';
import { AddchefComponent } from './addchef/addchef.component';
import { MenuchefComponent } from './menuchef/menuchef.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AcceptedstudentsComponent,
    StudentsnotaccepComponent,
    AddstudentComponent,
    ChefslistComponent,
    AddchefComponent,
    MenuchefComponent,
    AddChefComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
