type strNum = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: strNum, b: strNum) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
add('a', 'b');
add(1, 2);
