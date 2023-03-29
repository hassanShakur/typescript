function Logger(target: any, propName: string | Symbol) {
  console.log(target, propName);
}

function Accesser(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target, propName);
  console.log(descriptor);
}

class Car {
  @Logger
  design: string;
  constructor(d: string) {
    this.design = d;
  }

  @Accesser
  set theDesign(design: string) {
    this.design = design;
  }
}
