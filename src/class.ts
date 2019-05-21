export class ClassWithStatics {
  static add(a, b) {
    return `Class Add${a + b}`
  }
  static subtract(a, b) {
    return `Class Subtract${a - b}`;
  }
  static multiply = (a, b) => `Class Multiply ${a * b}`
  static value = "Class Value"
}