class Car {
  constructor(public name: string) {}

  set carName(name: string) {
    this.name = name;
  }

  get carName() {
    return this.name;
  }
}

const car = new Car('Revo');
car.carName = 'Toyota'; // Setter
console.log(car.carName); // Getter
