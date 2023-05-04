// Exporting file

namespace namespaceName {
  export const obj = {};
  export class MyClass {}
  export enum nums {
    one,
    two,
    three,
  }
  export const val: number = 1;
}

// Importing file

/// <reference path='exportingFileName.ts'/>
namespace namespaceName {
  // Use the exported items
}
