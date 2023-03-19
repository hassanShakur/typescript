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
