class CoolArray {
  constructor() {
    for (const i in arguments) {
      if (arguments[i] === undefined) {
        this.length = 0;
      } else {
        this[i] = arguments[i];
        this.length = arguments[i];
      }
    }
  }

  push(value) {
    const index = this.length;
    this[index] = value;
    this.length = index;
  }
}

const prueba1 = new CoolArray();

prueba1.push("prueba");
console.log(prueba1);

console.log(prueba1[4]);

describe("Given a push method of CoolArray class", () => {
  describe("When it recives 3 and it's called from a object with 2 properties", () => {
    test("Then it should add a 3rd property with the value 3", () => {
      const objectTest = new CoolArray(1, 2);
      const value = 3;
      const expectedReturn = 3;
      objectTest.push(value);

      const ReturnedValue = objectTest[2];

      expect(ReturnedValue).toBe(expectedReturn);
    });
  });

  describe("When it recives 'prueba' and it's called from a object with 1 properties", () => {
    test("Then it should add a 2nd property with the value 'prueba'", () => {
      const objectTest = new CoolArray(1);
      const value = "prueba";
      const expectedReturn = "prueba";

      objectTest.push(value);

      const ReturnedValue = objectTest[1];

      expect(ReturnedValue).toBe(expectedReturn);
    });
  });

  describe("When it recives 'prueba' and it's called from a object with 0 properties", () => {
    test("Then it should add a 1st property with the value 'prueba'", () => {
      const objectTest = new CoolArray();
      const value = "prueba";
      const expectedReturn = "prueba";

      objectTest.push(value);

      const ReturnedValue = objectTest[1];

      expect(ReturnedValue).toBe(expectedReturn);
    });
  });
});
