import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { TileComponent} from './tile.component';
import {Tile, TILES} from './tile';
import {$} from "protractor";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";
import {Headers, RequestOptions, Response, Http} from "@angular/http";

@Component({
    selector: 'tiles',
    templateUrl: 'tiles.component.html'
})
export class TilesComponent {
    tiles: TileComponent[] = [];
    userData: User;
    millisecondsToWait = 20;
    temp: string;

    constructor(usersService: UsersService, private http: Http){
      this.userData = usersService.getLoggedInUser();
    }

    addTile(tile: TileComponent) {
/*
         if(this.tiles.length === 0) {
         tile.active = true;
         }
*/
        this.tiles.push(tile);
    }

    updateTiles(newTiles: TileComponent[]) {
        this.tiles = newTiles;
    }

    selectTile(tile: TileComponent) {

      if(document.getElementsByClassName("kachel kachel-active")[0]){
        document.getElementsByClassName("kachel kachel-active")[0].innerHTML = this.temp;
      }

        this.tiles.forEach((change) => {
            change.active = false;

        });
        tile.active = true;

      setTimeout(function() {
        console.log("expandTitle");
        //document.getElementsByClassName("kachel kachel-active")[0].innerHTML += "\n" + "content";
      }, this.millisecondsToWait);

      this.temp = tile.tileName;

    }



}
