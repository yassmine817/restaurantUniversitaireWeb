import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu} from './Menu.model';

import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu[];
  AUTH_API = 'http://localhost:8080/api/menus';
  constructor(private http: HttpClient) { }


addMenu(menu): Observable<any> {
  return this.http.post(this.AUTH_API + '/addmenu', {
   meal1: menu.meal1,
    meal2: menu.meal2,
    meal3:menu.meal3,
    meal4:menu.meal4,
   date:menu.date,
   type:menu.type
  }, httpOptions);
}

getMenuList(){

  return this.http.get(this.AUTH_API);
}


}
