/**
 * Created by bburczek on 24.11.2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { OverviewComponent } from './tiles/overview.component';
import {AuthGuard} from "./auth.guard";
import {HeaderComponent} from "./directives/header.component";
import {NewsComponent} from "./news/news.component";
import {TrafficJamComponent} from "./traffic-jam/traffic-jam.component";
import {CreateBlogEntryComponent} from "./create-blog-entry/create-blog-entry.component";
import {BlogComponent} from "./blog/blog.component";


const appRoutes: Routes = [
  { path: 'viewBlogs', component:  BlogComponent },
  { path: 'createBlog', component:  CreateBlogEntryComponent },
  { path: 'trafficJam', component: TrafficJamComponent },
  { path: '', component: OverviewComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
    {path: 'news', component: NewsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

