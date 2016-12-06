import {Component} from "@angular/core";
import { Tile, TILES } from '../tiles/tile';

@Component({
    selector: 'overview',
    templateUrl: 'overview.component.html'
})
export class OverviewComponent {
    tiles: Tile[] = TILES;
}