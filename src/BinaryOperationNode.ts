import { ASTNode } from "./ASTNode";
import { NumberNode } from "./NumberNode";

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

  toJSON(): any {
    return {
      type: "BinaryOperationNode",
      operator: this.operator,
      left: this.left.toJSON(),
      right: this.right.toJSON()
    };
  }

  static fromJSON(json: any): BinaryOperationNode {
    const left = json.left.type === "NumberNode"
      ? NumberNode.fromJSON(json.left)
      : BinaryOperationNode.fromJSON(json.left);

    const right = json.right.type === "NumberNode"
      ? NumberNode.fromJSON(json.right)
      : BinaryOperationNode.fromJSON(json.right);

    return new BinaryOperationNode(left, right, json.operator);
  }
}
