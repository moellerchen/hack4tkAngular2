import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "./users/users.service";
import {User} from "./users/user";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  private isLoginAndPasswordCorrect = null;

  constructor(private usersService: UsersService,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  title = 'Tambourkorps Hamminkeln 1922 e.V.';
  subtitle = 'Terminmanager';

  ngOnInit() {
      /*
    this.usersService.getUsers();
    */
    this.myForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    this.isLoginAndPasswordCorrect = this.authService.login(this.myForm.value);
  }





}

