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

   ```js
   // Long syntax => Done behind the scenes anyways
   const obj: {
     name: string,
     age: number,
   } = {
     name: 'Jane Doe',
     age: 20,
   };
   ```

   ```js
   //Normal objects
   const obj = {
     name: 'Jane Doe',
     age: 20,
   };
   ```

5. Arrays
   Can be of a particular type. Syntax is like: with `dataTypeOfArray[]`

   ```js
   // Array types
   let games: string[];
   games = ['hockey'];
   ```

   For array with mutiple data types:

   ```js
   let multiple: (string | number)[];
   ```

   The pipe `|` is a `union` operator.

6. Tuples
   Special arrays with an exact number of elements in an order with optional types given.

   ```js
   let tuple: [number, string];
   tuple = [3, ''];
   ```

7. Enums
   Are like objects but only identifiers are written. By default, the first element has the value `0` and so on based on their index. This index can also be set to a desired value or even string:

   ```js
   enum Role {
   ADMIN,
   USER,
   REGULAR,
   }
   console.log(Role.ADMIN); // Prints 1

   // Dynamic setting

   ```

   ```js
   enum Role {
   ADMIN = 'ADMIN',
   USER = 9,
   REGULAR,
   }
   ```

   Its convention to use `CamelCase` for `enum` name and values as caps.

8. Union Types Vs Literal Types
   Union types points to a var accepting more than 1 inbuilt data type. Literal types are more specific values a var can hold.

   ```js
   let literalType: 'text' | 'otheValue';
   ```

   This therefore ensures that the var `literalType` can only hold one of the 2 specified strings.

#### Type Aliases

When managing types, all types that a var can take can be stored in a single `type` variable and any other var accepting the same types can refer to this alias and the types held are asigned to it. They are declared using the `type` keyword:

```js
type NumOrString = number | string;

let aliasUser: NumOrString;
aliasUser = 3;
```

9.  Function Return type
    To begin, a functions return type can be specified. If it doesn't return anything, then the `void` return type is used. Thou only specify a funcs return type if you have a reason to:

    ```js
    function someFunction(): number {
      return 3;
    }

    function someFunction(): void {
      return;
    }
    ```

10. Function Type
    These are for vars that hold functions as their values:

    ```js
    let functionVar: Function;
    functionVar = someFunction;
    ```

#### Functions as Types

Having more constrol on the type of function a var can store requires specifying what the fuction the var holds should take as parameter and should return:

```js
let specificFunctionVar: (a: number, b: string) => number;
specificFunctionVar = someFunction;
```

This will therefore accept the specified func type or one that takes no argument but returns a `number`.

11. Never Return Type
    This is mostly for error functions that are used to throw an error and therefore stop script execution meaning nothig is returned from them:

    ```js
    function appError(message: string, code: number): never {
      throw { message, errorCode: code };
    }
    ```

    The same can also apply to functions with an infinite loop.

### Classes

Basic normal structure:

```js
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

```js
class Car {
  constructor(private id: number, public name: string) {}
}
```

#### Readonly Attributes

```js
class C {
  public readonly name:string;
}
```

#### Inheritance

```js
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

```js
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

```js
class Test {
  static identifier = 'Value';
  static statFunc() {}
}

Test.identifier;
Test.statFunc();
```

#### Abstract Classes, Attributes & Methods

An abstract class cannot be instantiated. It's used to create a vlueprint for all methods and/or properties that the child classes must implement in their structure. Therefore abstract attributes of this class should not be implemented and the abstract methods are not implemented.

```js
abstract class AbstractClass {
  abstract name: string;
  abstract informaiton(): void;
}
```

An abstract method or prop must be in an abstract class.

#### Singletons & Private Constructors

Involves an aspect of any particular class having only one instance. The instance is created using a static method and once created, no other can be created. Achieved using static attributes and methods and use of a private `constructor`.

```js
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
