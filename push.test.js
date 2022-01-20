class CoolArray {
  index0;
  index1;
  index2;

  constructor(value1, value2, value3) {
    this.index0 = value1;
    this.index1 = value2;
    this.index2 = value3;
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
