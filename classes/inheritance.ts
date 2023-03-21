class Book {
  constructor(public id: number, public name: string) {}
}

class DSABook extends Book {
  constructor(public id: number, public topic: string) {
    // Call Book constructor with a name for this class and the passed in id
    super(id, 'DSA');
  }
  printBook() {
    console.log(`Book id ${this.id} named ${this.name}`);
  }
}
