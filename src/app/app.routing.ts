/**
 * Created by bburczek on 24.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { OverviewComponent } from './overview/overview.component';
import {AuthGuard} from "./auth.guard";


const appRoutes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

