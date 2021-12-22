import { AddchefComponent } from './addchef/addchef.component';
import { ChefslistComponent } from './chefslist/chefslist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentsnotaccepComponent } from './studentsnotaccep/studentsnotaccep.component';
import { AcceptedstudentsComponent } from './acceptedstudents/acceptedstudents.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserComponent} from './user/user.component';
import { MenuchefComponent } from './menuchef/menuchef.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
const routes: Routes = [

  {
    path: 'register', component: UserComponent,
    children:[{path:'',component: RegisterComponent}]
  },


  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginComponent }]

},
{path: '',redirectTo: '/login', pathMatch:'full'},

  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardAdminComponent },
  { path: 'acceptedstudents', component: AcceptedstudentsComponent },
  { path: 'notstudents', component: StudentsnotaccepComponent },
  { path: 'acceptedstudents/addstudent', component: AddstudentComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'listchef', component:ChefslistComponent },
  { path: 'addchef', component:AddchefComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'Menu', component: MenuchefComponent },
  { path: 'Menu/addmenu', component: AddMenuComponent },
  { path: 'admin', component: BoardAdminComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
