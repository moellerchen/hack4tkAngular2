import {Component, Input } from '@angular/core';
import {TilesComponent} from "./tiles.component";

@Component({
    selector: 'tile',
    templateUrl: 'tile.component.html'
})
export class TileComponent {
    @Input() tileName: string;
    @Input() shown: boolean;
    active: boolean = false;

    constructor(private tiles: TilesComponent) {
        tiles.addTile(this);
    }
}