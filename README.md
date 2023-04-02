# TypeScript

- [TypeScript](#typescript)
  - [Basics](#basics)
    - [Types](#types)
      - [Type Aliases](#type-aliases)
      - [Functions as Types](#functions-as-types)
    - [Classes](#classes)
      - [Initialization Shorthand](#initialization-shorthand)
      - [Readonly Attributes](#readonly-attributes)
      - [Inheritance](#inheritance)
      - [Getters \& Setters](#getters--setters)
      - [Static Properties](#static-properties)
      - [Abstract Classes, Attributes \& Methods](#abstract-classes-attributes--methods)
      - [Singletons \& Private Constructors](#singletons--private-constructors)
    - [Interfaces](#interfaces)
      - [Class Implementing Interface](#class-implementing-interface)
      - [Extending Interfaces](#extending-interfaces)
      - [Interface as FuncType](#interface-as-functype)
    - [Optional Attributes \& Methods](#optional-attributes--methods)
  - [Advanced](#advanced)
    - [Intersection Types](#intersection-types)
    - [Type Guards](#type-guards)
      - [InstanceOf](#instanceof)
    - [Discriminated Unions](#discriminated-unions)
    - [Type Casting](#type-casting)
    - [Index Properties](#index-properties)
    - [Function Overloads](#function-overloads)
  - [Generics](#generics)
    - [Smaple Generic Function](#smaple-generic-function)
    - [KeyOf Type](#keyof-type)
    - [Generic Classes](#generic-classes)
    - [Generic Utility Types](#generic-utility-types)
      - [ReadOnly](#readonly)
      - [Partial](#partial)
  - [Decorators](#decorators)
    - [First Classs Decorator](#first-classs-decorator)
    - [Decorator Factories](#decorator-factories)
    - [Property Decorators](#property-decorators)
    - [Accessors \& Parameter Decorators](#accessors--parameter-decorators)
    - [Method Decorator](#method-decorator)
    - [Returning from Class Decorator](#returning-from-class-decorator)
    - [Other Deco Returns](#other-deco-returns)

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

### Discriminated Unions

As the above check cannot work for interfaces, this can be used to check for such. A `literal type` can be used in each of the related interface and using this type and a switch statement, we'll be ble to determine the type of the instance the `this` is.

```ts
interface Dragon {
  type: 'dragon';
  flySpeed: number;
}

interface Shark {
  type: 'shark';
  swimSpeed: number;
}

type Creature = Dragon | Shark;

const creatureMove = (ani: Creature) => {
  let speed;
  switch (ani.type) {
    case 'dragon':
      speed = ani.flySpeed;
      break;

    case 'shark':
      speed = ani.swimSpeed;
      break;
  }
};
```

### Type Casting

When accessing dom elements using selectors like `id` and `classNames`, ts doesn't know the type of element that is selected and this accesing the operations that can be done on it eg `.value` property of `input` elements, may yield an error as the property may not exist in other html elements. Thats where type casting comes in:
These 2 syntax can be used:

```ts
const inputEl = document.getElementById('name')! as HTMLInputElement;
const btn = <HTMLButtonElement>document.getElementById('btn');
```

### Index Properties

Useful when creating like an index but not sure on what exactly will be included in it. Example when creating errors for different input elements and therefore the type of error & error message shown is dependent on the user input:

```ts
interface ErrorInterface {
  [prop: string]: string;
}

const emailNameError: ErrorInterface = {
  email: 'Input a valid email',
  name: 'Invalid name input',
};
```

The prop data type refers to the `key` type and the other is the `value` type. Thou with string as a key type, a number can be used as key.

### Function Overloads

Using an example where a function takes in params that can either be a string or number and return a value based on that, a further configuration can be performed on the same function to give ts an extra clue on what the output will be based on the iput type without this, ts will shouw the return type as either a string or a number, ie the combined data type.

```ts
type strNum = string | number;

// Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Actual function
function add(a: strNum, b: strNum) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
add('a', 'b');
add(1, 2);
```

## Generics

Refer to them as type thingys that give a general clue of what a complex data type contains or will yield in the end and such. Examples of inbuilt `generics` are `arrays` & `Promises`. They are specifically used to restrict a certain item/object to a specific type of data it works with.

```ts
const arr: Array<number> = [1, 2, 3];
arr[0].toFixed(2);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 2000);
});

promise.then((data) => data.split(' '));
```

In this example, the array is defined as will be holding numbers and therefore you get ts support when accessing and working with the array elements. Same is true for the promise which is expected to return a string & therefore during thr `.then()`, ts support for string elements is available.

### Smaple Generic Function

THis is in the case of creating a function that works on some data and returns something but ts is not knowledgeable of the type or components of the returned data.

```ts
function mergeObj<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObj({ name: 'han' }, { age: 18 });
```

This informs ts that the first param is of a certain type, same for the second and the returned value, `<>` is therefore a concat of the 2. This therefore offers support when eg extracting components of the returned value.

### KeyOf Type

In the sample code below, the `keyof` ensures that whenever the function is called, the second argument is always a key of the first argument as described in the generic func:

```ts
function extractValue<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractValue({ age: 20 }, 'age');
```

### Generic Classes

Creating flexible & type safe classes that can be constrained to a particular data type and work only with that:

```ts
class SomeStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  get storageData() {
    return this.data;
  }
}

const strge = new SomeStorage<string>();
strge.addItem('chips');
console.log(strge.storageData);

const storage2 = new SomeStorage<number>();
storage2.addItem(1);
```

### Generic Utility Types

There are extra utility types in ts including `Partial` & `Readonly`.

#### ReadOnly

Only allows the content tot be read and not manipulated:

```ts
const ages: Readonly<number[]> = [12, 18, 22];
```

#### Partial

Allows creation of an item of a certain type or interface without full implementation as the creation is done step by step and at the end the result is converted to the target non-partial object.

```ts
interface CompleteInter {
  a: string;
  b: number;
  c: Date;
}

function createAbc(a: string, b: number, c: Date): CompleteInter {
  let completeInter: Partial<CompleteInter> = {};
  completeInter.a = a;
  completeInter.b = b;
  completeInter.c = c;
  return completeInter as CompleteInter;
}
```

## Decorators

More for developers than users. It's an aspect of `metaprogramming` for soing some actions behind the scenes. When more than 1 is used, they are executed bottom up, ie the closest one to the class gets called first.

### First Classs Decorator

In terms of classes, they are called when the class is initialized and not when istantiated.

```ts
function Logger(constructor: Function) {
  console.log('Decorator called');
  console.log(constructor); // Logs the whole of SomeClass
}

@Logger
class SomeClass {
  constructor() {
    console.log('Class instantiated...');
  }
}

new SomeClass();
```

### Decorator Factories

THe decorator is contained in another function that returns it thus allowing passing of auguments to the decorator. When using factories, they are called as normal functions and therefore their execution is per the order in the code. But the returned decorators still follow the bottom up exec.

```ts
function Logger(text: string) {
  return function (constructor: Function) {
    console.log('Decorator called' + text);
    console.log(constructor);
  };
}

@Logger('some text')
```

### Property Decorators

This involves using decorators with other properties, not classes. They take in 2 params:

1. The target - Which can be the prototype of the object when dealing with instance & a constructor when dealing with statics, etc that holds the property called on.
2. Name - Property name - variable name.

```ts
function Logger(target: any, propName: string | Symbol) {
  console.log(target, propName);
}

class Car {
  @Logger
  design: string;
  constructor(d: string) {
    this.design = d;
  }
}
```

### Accessors & Parameter Decorators

Adds a third param in decorators for getters & setters like functions to print their info:

```ts
function Accesser(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  //
}

// Later in class
class SomeClass {
  @Accesser
  set theDesign(design: string) {
    this.design = design;
  }
}
```

The parameter decos have a difference in params, for one, the second param `name` is that of the function that contains it and second, the third param is an index for the parameter in the function:

```ts
function ParamDecorator(
  target: any,
  propName: string | Symbol,
  position: number
) {
  //
}

class Car {
  someFunc(@ParamDecorator param: string) {
    console.log(param);
  }
}
```

### Method Decorator

SImilar to the accesor ones with a difference in the `descriptor` contents. The syntax remains the same though, and is added before a class method. LOOK INTO PROPERTY DESCRIPTORS! (configurable, enumerable, value, writable)

### Returning from Class Decorator

Class decorators can return a constructor funtion that replaces the original one in the class, or add functionality to it. This constructor can work just like any other with logic that might be needed whenever the class is instantiated. The logic is as below:

```ts
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
```

### Other Deco Returns

Returns from property & parameter decorators are ignored thus have no effect. But from methods and getters and setters, you can return and edit the default values for the configurable, enumarable and such.
An example for a method decorator return can be:

```ts
function Binder(_: any, _2: string, descriptor: PropertyDescriptor) {
  const origiMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = origiMethod.bind(this);
      return boundFn;
    },
  };
  return newDescriptor;
}
```

What this does is that it ensures the `originalMethod` from which the decorator is called, always has its `this` bound to the function itself as the `newDescriptor` that is returned replaces the old one. This can be an encapsulation and help prevent `binding` the method whenever it is called by other items.
