import {Injectable} from '@angular/core';
import {User} from "./users/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "./users/users.service";
import {Subject, Observable} from "rxjs";
import {UserForLogin} from "./user-for-login";

@Injectable()
export class AuthService {
  private currentUser;

  constructor(private router: Router, private usersService: UsersService) {
  }

  login(userForLogin: UserForLogin): boolean {
    console.log("login");
    let username = userForLogin.user;

    for (let user of this.usersService.getUsers()) {
      if (user.user_login === username) {
        this.usersService.setLoggedInUser(user);
        this.currentUser = user;
        console.log(user);
        this.router.navigate(['/']);
        return true;
      }
    }
    return false;

  }



  isAuthenticated() {
    if (this.currentUser && this.currentUser != null) {
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
  }

}
