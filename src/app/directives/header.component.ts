import {Component} from "@angular/core";
import {RouterOutlet, Routes} from "@angular/router";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Component({
  selector: 'my-head',
  templateUrl: 'header.component.html',
  styleUrls: ['app.css']
})
export class HeaderComponent {



  constructor(private usersService: UsersService){
  }

  getTitle(){
    let title = this.usersService.getLoggedInUser().display_name;
    return title;
  }





}
