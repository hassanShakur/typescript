class Book {
  constructor(name: string) {
    this.name = name;
  }
  name: string;

  information(this: Book) {
    console.log(`This book is named ${this.name}`);
  }
}

const book = new Book('Awesome book');
console.log(book);
book.information();

const informationCopy = {
  name: 'someBook',
  information: book.information,
};
informationCopy.information();

// Initialization shorthand && Readonly
class Car {
  constructor(private readonly id: number, public name: string) {}
  information() {
    console.log(`The car ${this.id} is named ${this.name}`);
  }
}

const car = new Car(123, 'mercedes');
car.information();
