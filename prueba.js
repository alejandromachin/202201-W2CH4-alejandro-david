class CoolArray {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
}

const prueba = new CoolArray(1, 3, 4, 5, 5, 6, 7, 8, 23423, 234);

console.log(prueba);
