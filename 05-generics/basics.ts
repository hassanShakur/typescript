const arr: Array<number> = [1, 2, 3];
arr[0].toFixed(2);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 2000);
});

promise.then((data) => data.split(' '));
