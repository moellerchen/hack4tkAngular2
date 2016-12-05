/**
 * Created by bburczek on 24.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {MyTermineComponent} from "./my-termine/my-termine.component";
import {CreateTerminComponent} from "./create-termin/create-termin.component";
import {AuthGuard} from "./auth.guard";
import {OverviewComponent} from "./overview/overview.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: 'my-termine', component: MyTermineComponent, canActivate: [AuthGuard]  },
  { path: 'create-termin', component: CreateTerminComponent, canActivate: [AuthGuard]   },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]   },
  { path: '', component: LoginComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

