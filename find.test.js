class CoolArray {
  constructor() {
    for (const i in arguments) {
      if (Object.hasOwnProperty.call(arguments, i)) {
        this[i] = arguments[i];
        this.length = arguments[i];
      }
    }
  }

  find(value) {
    for (let i = 0; i < this.length; i++) {
      value(this[i]);
    }
  }
}
// find y map

function comprobar(a) {
  if (a > 5) {
    return true;
  }
  return false;
}
const prueba = new CoolArray(1, 7, 4, 4, 5, 6);

prueba.find(comprobar);
