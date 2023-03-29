function ParamDecorator(
  target: any,
  propName: string | Symbol,
  position: number
) {
  console.log(target, propName);
  console.log(position);
}

class Car {
  someFunc(@ParamDecorator param: string) {
    console.log(param);
  }
}
