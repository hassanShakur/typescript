const n1 = document.querySelector('.num1')! as HTMLInputElement;
const n2 = document.querySelector('.num2')! as HTMLInputElement;
const btn = document.querySelector('button');

const add = (n1: number, n2: number) => n1 + n2;

btn?.addEventListener('click', () => {
  console.log(add(+n1.value, +n2.value));
});

//? ! is to show that we are sure there will always be a value on that input element
/*======
HTMLInputElement is a typecast
=======*/
