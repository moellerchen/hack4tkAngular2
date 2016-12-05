import {Injectable} from '@angular/core';
import {User} from "./users/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "./users/users.service";
import {Subject, Observable} from "rxjs";
import {UserForLogin} from "./user-for-login";

@Injectable()
export class AuthService {
  public currentUser;

  constructor(private router: Router, private usersService: UsersService) {
  }

  login(userForLogin: UserForLogin): boolean {
    console.log("login");
    let username = userForLogin.user;
    /*
    for (let user of this.usersService.getUsers()) {
      if (user.user_login === username) {
        this.currentUser = user;
        console.log(user);
        this.router.navigate(['/appointment']);
        return true;
      }
    }
    return false;
    */
      this.router.navigate(['/']);
      return true;
  }



  isAuthenticated() {
      /*
    if (this.currentUser && this.currentUser != null) {
      return true;
    }
    return false;
    */

      return true;
  }

  logout() {
    this.currentUser = null;
  }

}
