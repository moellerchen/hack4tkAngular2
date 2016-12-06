import {Component} from "@angular/core";
import {RouterOutlet, Routes, Router} from "@angular/router";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Component({
  selector: 'my-head',
  templateUrl: 'header.component.html',
  styleUrls: ['app.css']
})
export class HeaderComponent {

  constructor(private usersService: UsersService, private router: Router){
  }

  getTitle(){
    let title = this.usersService.getLoggedInUser().display_name;
    return title;
  }

  homeaufruf(){
    this.router.navigate(['/']);
  }





}
