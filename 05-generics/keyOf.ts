function extractValue<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractValue({ age: 20 }, 'age');
