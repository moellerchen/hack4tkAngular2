import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './login.component';
import { routing }  from './app.routing';
import {UsersService} from "./users/users.service";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
