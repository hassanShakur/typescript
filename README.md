# TypeScript

## Basics

### Types

`js` uses `dynamic` types resolved during runtime while `ts` uses `static` types set during development.

1. `any` - Var can take any data type.
2. `Unknown` - When initial val of the var is unknown - safer that `any`.
3. `number`, `string`, `boolean`.

Concatenate 2 types using `or` like `string | number`.

4. Object
   This can be written in 2 syntaxes:

   ```ts
   // Long syntax => Done behind the scenes anyways
   const obj: {
     name: string;
     age: number;
   } = {
     name: 'Jane Doe',
     age: 20,
   };
   ```

   ```ts
   //Normal objects
   const obj = {
     name: 'Jane Doe',
     age: 20,
   };
   ```

5. Arrays
   Can be of a particular type. Syntax is like: with `dataTypeOfArray[]`

   ```ts
   // Array types
   let games: string[];
   games = ['hockey'];
   ```

   For array with mutiple data types:

   ```ts
   let multiple: (string | number)[];
   ```

   The pipe `|` is a `union` operator.

6. Tuples
   Special arrays with an exact number of elements in an order with optional types given.

   ```ts
   let tuple: [number, string];
   tuple = [3, ''];
   ```

7. Enums
   Are like objects but only identifiers are written. By default, the first element has the value `0` and so on based on their index. This index can also be set to a desired value or even string:

   ```ts
   enum Role {
     ADMIN,
     USER,
     REGULAR,
   }
   console.log(Role.ADMIN); // Prints 1

   // Dynamic setting
   ```

   ```ts
   enum Role {
     ADMIN = 'ADMIN',
     USER = 9,
     REGULAR,
   }
   ```

   Its convention to use `CamelCase` for `enum` name and values as caps.

8. Union Types Vs Literal Types
   Union types points to a var accepting more than 1 inbuilt data type. Literal types are more specific values a var can hold.

   ```ts
   let literalType: 'text' | 'otheValue';
   ```

   This therefore ensures that the var `literalType` can only hold one of the 2 specified strings.

#### Type Aliases

When managing types, all types that a var can take can be stored in a single `type` variable and any other var accepting the same types can refer to this alias and the types held are asigned to it. They are declared using the `type` keyword:

```ts
type NumOrString = number | string;

let aliasUser: NumOrString;
aliasUser = 3;
```

9.  Function Return type
    To begin, a functions return type can be specified. If it doesn't return anything, then the `void` return type is used. Thou only specify a funcs return type if you have a reason to:

    ```ts
    function someFunction(): number {
      return 3;
    }

    function someFunction(): void {
      return;
    }
    ```

10. Function Type
    These are for vars that hold functions as their values:

    ```ts
    let functionVar: Function;
    functionVar = someFunction;
    ```

#### Functions as Types

Having more constrol on the type of function a var can store requires specifying what the fuction the var holds should take as parameter and should return:

```ts
let specificFunctionVar: (a: number, b: string) => number;
specificFunctionVar = someFunction;
```

This will therefore accept the specified func type or one that takes no argument but returns a `number`.

11. Never Return Type
    This is mostly for error functions that are used to throw an error and therefore stop script execution meaning nothig is returned from them:

    ```ts
    function appError(message: string, code: number): never {
      throw { message, errorCode: code };
    }
    ```

    The same can also apply to functions with an infinite loop.

### Classes

Basic normal structure:

```ts
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
```

#### Initialization Shorthand

Instead of declaring the attributes of a class separate then initialize them in the constructor, both of these activities can be done directly in the constructor:

```ts
class Car {
  constructor(private id: number, public name: string) {}
}
```

#### Readonly Attributes

```ts
class C {
  public readonly name: string;
}
```

#### Inheritance

```ts
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
```

#### Getters & Setters

Start with keywords `get` or `set`. A getter must return something and a setter accesses a value as param and sets a class attribute. Both when called are not executed as functions.

```ts
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
```

#### Static Properties

Are properties directy associated with the class itself and not its instances. Thus a statement like `this.statFunc()` will not work.

```ts
class Test {
  static identifier = 'Value';
  static statFunc() {}
}

Test.identifier;
Test.statFunc();
```

#### Abstract Classes, Attributes & Methods

An abstract class cannot be instantiated. It's used to create a vlueprint for all methods and/or properties that the child classes must implement in their structure. Therefore abstract attributes of this class should not be implemented and the abstract methods are not implemented.

```ts
abstract class AbstractClass {
  abstract name: string;
  abstract informaiton(): void;
}
```

An abstract method or prop must be in an abstract class.

#### Singletons & Private Constructors

Involves an aspect of any particular class having only one instance. The instance is created using a static method and once created, no other can be created. Achieved using static attributes and methods and use of a private `constructor`.

```ts
class Singleton {
  private static instance: Singleton;
  private constructor(public name: string) {}
  static getInstance() {
    if (this.instance) {
      // this in statics refers to the class itself
      return this.instance;
    }
    return new Singleton('Default only instance');
  }
}

const instance = Singleton.getInstance();
console.log(instance);
```

Therefore calling the constructor ie `new SingletonClass()` won't work as the constructor is private.

### Interfaces

Is a data type thingy that allows decribing the structure of an object. This may include methods & properties it may have.

```ts
interface Music {
  trackName: string;
  playPeriod: number;

  play(): void;
}

let iWantItThatWay: Music;

iWantItThatWay = {
  trackName: 'I want it that way',
  playPeriod: 3.24,
  play() {
    console.log(`Playing ${this.trackName}`);
  },
};
```

#### Class Implementing Interface

A class can implement more than 1 interface, separated by commas unlike in inheritance where it can only inherit from 1 class. Interfaces can provide the attributes and functions that a class must implement. It differs from `abstract` classes as they can never have any instantiation or implementation of some or any of its internals.

```ts
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
// or
// let person1: Player => Both will work
person1 = new Player('Soccer');
person1.playing('Hassan');
```

The internals of an `interface` can have the modifier `readonly` implemented which will be effective in all implemented classes. It thou cannot have modifiers `public`, `private` & the likes.

#### Extending Interfaces

An interface can extend another interface - like in `inheritance` - and this can work for extension of more than one interface unlike in classes where they can only extend exactly 1 other class.

```ts
interface InterFace1 {
  name: string;
}
interface InterFace2 {
  age: number;
}
interface InterFace3 extends InterFace1, InterFace2 {
  otherName: string;
}
```

#### Interface as FuncType

Interfaces can be an alternative to the `type` for function type structure definitions. It works as:

```ts
interface funcType {
  // Params and return type
  (num: number, num2: number): number;
}

let addFunc: funcType;
addFunc = (a: number, b: number) => a + b;
```

### Optional Attributes & Methods

Both classes and interfaces can have optional attributes & methods. Implemented with a `?` after their name. One can be optional in the interface but implemented as a must in the implementing class.

```ts
class optional {
  name?: string;
  method?(): void;
}
```

## Advanced

### Intersection Types

These are special types created from other types. If the type is an object, then all unique properties will be inherited, and if its a type of data types like `string | number`, then the common data type that appears in both the intersected types will be used by the inheriter. This similar logic can be implemented using `interfaces` instead of `types` and still work the same:

```ts
type master = {
  skills: string;
  disciples: string[];
};

type disciple = {
  skill: string;
};

type apprentice = master & disciple;
const appr: apprentice = {
  skills: 'Some skills',
  disciples: ['yen', 'chen'],
  skill: 'wing-chun',
};
```

### Type Guards

In cases eg the above where a type is made of 1+ other types, there might exist a clash. Examining the code below:

```ts
const strNum: string | number;
```

When using the var for an operation, eg multiplication, it has to be checked first if it is a number or else functionality may fail. This is still the case when using the `object types` but as in this case a simple `typeof` operator can be used, for objects is different as the `typeof` will always return an object.

In the example above, if the intersection was an `or`, then an apprentice may sometimes not have the `disciples` property & thus the same must be checked. One way mignt be:

```ts
type sampleAppr = master | disciple;
const displaySampleAppr = (appren: sampleAppr) => {
  if ('disciples' in appren) console.log(appren.disciples);
};
```

#### InstanceOf

FOr the above code, if the types `master` and `apprentice` were classes instead of types, then the checking of existance of a property in the guard clause can be done using the inbuilt `instanceof` operator for classes:

```ts
const displaySampleAppr = (appren: sampleAppr) => {
  if (appren instanceof master) console.log(appren.disciples);
};
```

The same won't work for interfaces as there are no interfaces in `js` , that is after `ts` compilation.
