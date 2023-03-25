function mergeObj<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObj({ a: 'name' }, { b: 'age' });
console.log(PerformanceEventTiming);
