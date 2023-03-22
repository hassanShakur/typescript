"use strict";
class Player {
    constructor(game) {
        this.game = game;
    }
    playing(person) {
        console.log(`${person} is playing ${this.game}`);
    }
}
let person1;
person1 = new Player('Soccer');
person1.playing('Hassan');
