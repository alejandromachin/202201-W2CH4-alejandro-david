class CoolArray {
  constructor() {
    for (const i in arguments) {
      if (Object.hasOwnProperty.call(arguments, i)) {
        this[i] = arguments[i];
        this.length = arguments[i];
      }
    }
  }

  push(value) {
    const index = this.length + 1;
    this[index] = value;
    this.length = index;
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
