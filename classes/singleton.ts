class Singleton {
  private static instance: Singleton;
  private constructor(public name: string) {}
  static getInstance() {
    if (this.instance) {
      // this in statics refers to the class itself
      return this.instance;
    }
    return new Singleton('Default only instance');
  }
}

const instance = Singleton.getInstance();
console.log(instance);
