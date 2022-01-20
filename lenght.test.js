function leght(object) {
  if (this.index0 !== undefined) {
    if (this.index1 !== undefined) {
      if (this.index2 !== undefined) {
        return 3;
      }
      return 2;
    }
    return 1;
  }
  return 0;
}

describe("Given a lengt function", () => {
  describe("When recived nothing", () => {
    test("Then return 0", () => {
      let this.index0;
      let this.index1;
      let this.index2;
       const leghtExpected = 0;
      // Act
      length()
      // Assert
    });
  });
});
