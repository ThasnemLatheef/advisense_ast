import { NumberNode } from "../src/NumberNode";
import { BinaryOperationNode } from "../src/BinaryOperationNode";

test("adds two numbers", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(2),
    new NumberNode(3),
    "+"
  );
  expect(expr.evaluate()).toBe(5);
});

test("subtracts two numbers", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(5),
    new NumberNode(2),
    "-"
  );
  expect(expr.evaluate()).toBe(3);
});

test("multiplies two numbers", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(4),
    new NumberNode(3),
    "*"
  );
  expect(expr.evaluate()).toBe(12);
});

test("divides two numbers", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(10),
    new NumberNode(2),
    "/"
  );
  expect(expr.evaluate()).toBe(5);
});

test("throws on division by zero", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(1),
    new NumberNode(0),
    "/"
  );
  expect(() => expr.evaluate()).toThrow("Division by zero");
});

test("greater than comparison", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(5),
    new NumberNode(3),
    ">"
  );
  expect(expr.evaluate()).toBe(1);
});
test("less than comparison", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(2),
    new NumberNode(3),
    "<"
  );
  expect(expr.evaluate()).toBe(1);
});
test("less than or equal comparison", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(2),
    new NumberNode(3),
    "<="
  );
  expect(expr.evaluate()).toBe(1);
});

test("greater than or equal comparison", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(3),
    new NumberNode(3),
    ">="
  );
  expect(expr.evaluate()).toBe(1);
});
test("equality comparison", () => {
  const expr = new BinaryOperationNode(
    new NumberNode(3),
    new NumberNode(3),
    "=="
  );
  expect(expr.evaluate()).toBe(1);
});

test("nested expressions evaluate correctly", () => {
  const expr = new BinaryOperationNode(
    new BinaryOperationNode(new NumberNode(1), new NumberNode(2), "+"),
    new NumberNode(3),
    "*"
  );
  expect(expr.evaluate()).toBe(9);
});

test("prints nested expression correctly", () => {
  const expr = new BinaryOperationNode(
    new BinaryOperationNode(new NumberNode(1), new NumberNode(2), "+"),
    new NumberNode(3),
    "*"
  );
  expect(expr.print()).toBe("((1 + 2) * 3)");
});

test("serializes and deserializes expression correctly", () => {
  const expr = new BinaryOperationNode(
    new BinaryOperationNode(new NumberNode(1), new NumberNode(2), "+"),
    new NumberNode(3),
    "*"
  );

  const json = JSON.stringify(expr.toJSON());
  const parsed = JSON.parse(json);
  const reconstructed = BinaryOperationNode.fromJSON(parsed);

  expect(reconstructed.evaluate()).toBe(9);
  expect(reconstructed.print()).toBe("((1 + 2) * 3)");
});

