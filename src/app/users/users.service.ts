import { Injectable, OnInit } from '@angular/core';
import {User} from "./user";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  private users: User[];

  private loggedInUser: User;

  constructor(private http: Http) { }


  getUserById(id:number) {
    this.users.forEach(function (element, index, array) {
      if (array[index].ID == id) return element;
    });
  }

  setLoggedInUser(user: User) {
      this.loggedInUser = user;
  }

  getLoggedInUser() {
      return this.loggedInUser;
  }

  getUsers() {
    this.fetchData();
    return this.users;
  }


  fetchData() {
    console.log("fetchData");

    return this.http.get('/app/users/usersMock.json').map((test: Response) => test.json())
      .subscribe(
        (data: any[]) => {
          this.users = data;
          console.log(this.users);
        }
      );
  }

  getData() {
    return this.http.get('/app/users/usersMock.json').map((test: Response) => test.json());
  }

}
