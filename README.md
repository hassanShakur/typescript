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
