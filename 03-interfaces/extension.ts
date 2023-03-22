// Extending interfaces

interface InterFace1 {
  name: string;
}
interface InterFace2 {
  age: number;
}
interface InterFace3 extends InterFace1, InterFace2 {
  otherName: string;
}
