import { ASTNode } from "./ASTNode";

export class BinaryOperationNode implements ASTNode {
  constructor(
    public left: ASTNode,
    public right: ASTNode,
    public operator: "+" | "-" | "*" | "/" | ">" | "<" | "<=" | ">=" | "==",
  ) {}

  evaluate(): number {
    const leftVal = this.left.evaluate();
    const rightVal = this.right.evaluate();

    switch (this.operator) {
      case "+": return leftVal + rightVal;
      case "-": return leftVal - rightVal;
      case "*": return leftVal * rightVal;
      case "/":
        if (rightVal === 0) {
          throw new Error("Division by zero");
        }
        return leftVal / rightVal;
      case ">":
        return leftVal > rightVal ? 1 : 0;
      case "<":
        return leftVal < rightVal ? 1 : 0;
      case "<=":
        return leftVal <= rightVal ? 1 : 0;
      case ">=":
        return leftVal >= rightVal ? 1 : 0;
      case "==":
        return leftVal === rightVal ? 1 : 0;
      default:
        throw new Error(`Invalid operator: ${this.operator}`);
    }
  }

  print(): string {
    return `(${this.left.print()} ${this.operator} ${this.right.print()})`;
  }
}
