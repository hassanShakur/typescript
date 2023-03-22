let unknownType: unknown;
let anyType: any;
let someName: string;

// These will work
unknownType = 'name';
unknownType = 4;
console.log(unknownType);

// Assignment of unknown to a known type can be done after type checking
// someName = unknownType => Wont work
if (typeof unknownType === 'string') {
  someName = unknownType;
}

// Object type
const obj = {
  name: 'Jane Doe',
  age: 20,
};

// Array types
let games: string[];

games = ['hockey'];

// Mixed data in array
let multiple: (string | number)[];

// Tuples
let tuple: [number, string];
tuple = [3, ''];

// enums
enum Role {
  ADMIN,
  USER,
  REGULAR,
}

console.log(Role.ADMIN);

// Literal Types
let literalType: 'text' | 'otheValue';

// Type aliases
type NumOrString = number | string;

let aliasUser: NumOrString;
aliasUser = 3;
