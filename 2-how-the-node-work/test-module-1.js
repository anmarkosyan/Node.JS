// class Calculate {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//
//   divide(a, b) {
//     return a / b;
//   }
// }

//module.exports = Calculate;//use module.exports = ... => only if need to export one value;

module.exports = class {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
