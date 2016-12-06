import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsComponent} from "./news/news.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  isAuth() {
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['/login']);
    }
    return this.authService.isAuthenticated();
  }

  onLogout() {
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/login']);

  }


}
