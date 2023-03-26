class SomeStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  get storageData() {
    return this.data;
  }
}

const strge = new SomeStorage<string>();
strge.addItem('chips');
strge.addItem('buns');
console.log(strge.storageData);

const storage2 = new SomeStorage<number>();
storage2.addItem(1);
