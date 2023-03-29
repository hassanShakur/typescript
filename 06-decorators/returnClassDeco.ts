function Logger() {
  return function <
    T extends { new (...args: any[]): { name: string } }
  >(originalonstructor: T) {
    return class extends originalonstructor {
      constructor(..._: any) {
        super();
        // logic for when instantiation happens
      }
    };
  };
}

@Logger()
class SomeClass {
  constructor(public name: string) {
    console.log('Class instantiated...');
  }
}

new SomeClass('person');
