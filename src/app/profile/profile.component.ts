import {Component, OnInit} from "@angular/core";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
    constructor(private usersService: UsersService) {}
    currentUser: User;
    ngOnInit() {
        this.currentUser = this.usersService.getLoggedInUser();
    }
}