class CoolArray {
  constructor() {
    for (const i in arguments) {
      if (Object.hasOwnProperty.call(arguments, i)) {
        this[i] = arguments[i];
      }
    }
  }
}
