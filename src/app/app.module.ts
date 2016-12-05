import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {TermineService} from "./termine/termine.service";
import { LoginComponent } from './login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { routing }  from './app.routing';
import {UsersService} from "./users/users.service";
import { MyTermineComponent } from './my-termine/my-termine.component';
import { CreateTerminComponent } from './create-termin/create-termin.component';
import {AttendanceService} from "./termine/attendance.service";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import { OverviewComponent } from './overview/overview.component';
import {ClothesService} from "./termine/clothes.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentComponent,
    MyTermineComponent,
    CreateTerminComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    TermineService,
    UsersService,
    AttendanceService,
    AuthService,
    AuthGuard,
    ClothesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
