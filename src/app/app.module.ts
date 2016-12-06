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
import { TrafficJamComponent } from './traffic-jam/traffic-jam.component';
import { OverviewComponent } from './tiles/overview.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tiles/tile.component';
import {TilesModalComponent} from "./tiles/tiles-modal.component";
import {NewsComponent} from "./news/news.component";
import {ToHtmlPipe} from "./tiles/toHtml.pipe";
import {NewsService} from "./news/news.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      OverviewComponent,
      TrafficJamComponent,
      OverviewComponent,
      TilesComponent,
      TileComponent,
      TilesModalComponent,
      NewsComponent,
      ToHtmlPipe
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
    AuthGuard,
      NewsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
