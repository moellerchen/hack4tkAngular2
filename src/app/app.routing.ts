/**
 * Created by bburczek on 24.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { OverviewComponent } from './tiles/overview.component';
import {AuthGuard} from "./auth.guard";
import {NewsComponent} from "./news/news.component";
import {TrafficJamComponent} from "./traffic-jam/traffic-jam.component";


const appRoutes: Routes = [
  { path: 'trafficJam', component: TrafficJamComponent },
  { path: '', component: OverviewComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
    {path: 'news', component: NewsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

