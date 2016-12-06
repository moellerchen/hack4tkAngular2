import {Component, Input} from "@angular/core";
import {TileComponent} from "./tile.component";
import {TilesComponent} from "./tiles.component";

@Component({
    selector: 'tiles-modal',
    templateUrl: 'tiles-modal.component.html'
})
export class TilesModalComponent{
    @Input() tiles: TileComponent[];
    constructor(private tilesComponent:TilesComponent) {}

    saveTiles() {
        this.tilesComponent.updateTiles(this.tiles);
    }
}