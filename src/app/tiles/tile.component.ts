import {Component, Input } from '@angular/core';
import {TilesComponent} from "./tiles.component";
import {TilesModalComponent} from './tiles-modal.component';
import { NewsComponent } from '../news/news.component';

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