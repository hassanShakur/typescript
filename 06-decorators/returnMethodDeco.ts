function Binder(_: any, _2: string, descriptor: PropertyDescriptor) {
  const origiMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = origiMethod.bind(this);
      return boundFn;
    },
  };
  return newDescriptor;
}

class Messanger {
  message: string = 'Some message';

  @Binder
  printMessage() {
    console.log(this.message);
  }
}

const msg = new Messanger();
// document
//   .getElementById('btn')!
//   .addEventListener('click', msg.printMessage.bind(msg));
document
  .getElementById('btn')!
  .addEventListener('click', msg.printMessage);
