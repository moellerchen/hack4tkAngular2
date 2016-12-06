import { Component } from '@angular/core';
import { TileComponent} from './tile.component';
import {Tile, TILES} from './tile';
import {$} from "protractor";

@Component({
    selector: 'tiles',
    templateUrl: 'tiles.component.html'
})
export class TilesComponent {
    tiles: TileComponent[] = [];
    millisecondsToWait = 20;

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
        document.getElementsByClassName("kachel kachel-active")[0].innerHTML = tile.tileName;
      }

        this.tiles.forEach((change) => {
            change.active = false;

        });
        tile.active = true;

      setTimeout(function() {
        console.log("expandTitle");
        document.getElementsByClassName("kachel kachel-active")[0].innerHTML += "\n" + "content";
      }, this.millisecondsToWait);

    }


}
