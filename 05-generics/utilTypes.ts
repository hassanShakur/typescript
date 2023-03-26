// Readonly
const ages: Readonly<number[]> = [12, 18, 22];

// Patial
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
