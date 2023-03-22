interface Playable {
  game: string;

  playing(person: string): void;
}

class Player implements Playable {
  constructor(public game: string) {}
  playing(person: string): void {
    console.log(`${person} is playing ${this.game}`);
  }
}

let person1: Playable;
person1 = new Player('Soccer');
person1.playing('Hassan');
