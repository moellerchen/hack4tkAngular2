import { Component } from '@angular/core';
import { TileComponent} from './tile.component';
import { Tile } from './tile';

@Component({
    selector: 'tiles',
    templateUrl: 'tiles.component.html'
})
export class TilesComponent {
    tiles: TileComponent[] = [];

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
        this.tiles.forEach((change) => {
            change.active = false;
        });
        tile.active = true;
    }
}
