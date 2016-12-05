/**
 * Created by bburczek on 24.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import {AuthGuard} from "./auth.guard";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

