export const ConstItem = {
  add(a, b) {
    return `Const Add${a + b}`;
  },
  subtract(a, b) {
    return `Const Subtract${a - b}`;
  },
  multiply: (a, b) => `Const Multiply ${a * b}`,
  value: "Const Value"
}