var n1 = document.querySelector('.num1');
var n2 = document.querySelector('.num2');
var btn = document.querySelector('button');
var add = function (n1, n2) { return n1 + n2; };
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log(add(+n1.value, +n2.value));
});
//? ! is to show that we are sure there will always be a value on that input element
