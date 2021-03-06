import {TilesModalComponent} from './tiles-modal.component';

export class Tile {
    name: string;
    template: string;
    shown: boolean;
}

export const TILES: Tile[] = [
    {
        name: "News",
        template: '<news [short]="true"></news>',
        shown: false
    },
    {
        name: "Maps",
        template: 'Hier könnten Ihre Maps stehen!',
        shown: false
    },
    {
        name: "Blog",
        template: 'Hier könnte Ihr Blog stehen!',
        shown: false
    }
];
