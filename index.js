class CoolArray {
  constructor(...args) {
    for (const i in args) {
      if (args !== 0) {
        this[i] = args[i];
        this.length = args[i];
      }
    }
  }
}
