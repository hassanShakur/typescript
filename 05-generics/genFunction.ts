function mergeObj<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObj({ name: 'han' }, { age: 18 });
console.log(mergedObj.age);
