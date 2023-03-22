// Interface as function type
interface funcType {
  (num: number, num2: number): number;
}

let addFunc: funcType;
addFunc = (a: number, b: number) => a + b;

// Optional values
class optional {
  name?: string;
  method?(): void;
}
