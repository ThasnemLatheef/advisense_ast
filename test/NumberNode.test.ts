import { NumberNode } from "../src/NumberNode";

test("evaluates NumberNode correctly", () => {
  const num = new NumberNode(42);
  expect(num.evaluate()).toBe(42);
});

test("prints NumberNode correctly", () => {
  const num = new NumberNode(7);
  expect(num.print()).toBe("7");
});
