// Function return type
function someFunction(): number {
  return 3;
}

let functionVar: Function;
functionVar = someFunction;

// Functions as type
let specificFunctionVar: (a: number, b: string) => number;
specificFunctionVar = someFunction;

// Never return
function appError(message: string, code: number): never {
  throw { message, errorCode: code };
}
