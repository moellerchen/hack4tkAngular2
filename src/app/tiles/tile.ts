export class Tile {
    name: string;
    template: string;
    shown: boolean;
}

export const TILES: Tile[] = [
    {
        name: "News",
        template: '<h1>Hier könnten Ihre News stehen!</h1>',
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
    },
    {
        name: "Wetter",
        template: 'Hier könnte Ihr Wetter stehen!',
        shown: false
    },
    {
        name: "Weiteres",
        template: 'Hier könnten weitere Informationen stehen!',
        shown: false
    }
];