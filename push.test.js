class CoolArray {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }
}


  push(value) {
    if (this.index0 !== undefined) {
      if (this.index1 !== undefined) {
        if (this.index2 !== undefined) {
          this.index3 = value;
        }
        this.index2 = value;
      } else {
        this.index1 = value;
      }
    } else {
      this.index0 = value;
    }
  }
}

// describe("Given a push method of CoolArray class", () => {
//   describe("When it recives the value 3 and it's called from a object with 2 properties", () => {
//     test("Then it should add a 3rd property with the value 3 called index2", () => {
//       const objectTest = new CoolArray(1, 2);
//       const value = 3;
//       objectTest.index3 = 3;

//       const ReturnedValue = objectTest.push(3);

//       extec

//     })

//   })

// });
