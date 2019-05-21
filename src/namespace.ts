export namespace Namespace {
  export function add(a, b) {
    return `Namespace Add${a + b}`;
  }
  export function subtract(a, b) {
    return `Namespace Subtract${a - b}`;
  }
  export const multiply = (a, b) => `Namespace Multiply ${a * b}`
  export const value = "Namespace Value"
}