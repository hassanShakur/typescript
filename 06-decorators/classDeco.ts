function Logger(constructor: Function) {
  console.log('Decorator called');
  console.log(constructor);
}

@Logger
class SomeClass {
  constructor() {
    console.log('Class instantiated...');
  }
}

new SomeClass();

// Decorator factories
function OtherLogger(text: string) {
  return function (constructor: Function) {
    console.log('Decorator called' + text);
    console.log(constructor);
  };
}

@OtherLogger('some text')
class My {}
