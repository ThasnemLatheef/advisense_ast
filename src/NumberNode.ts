import { ASTNode } from "./ASTNode";

export class NumberNode implements ASTNode {
  constructor(public value: number) {}

  evaluate(): number {
    return this.value;
  }

  print(): string {
    return this.value.toString();
  }

  toJSON(): any {
    return {
      type: "NumberNode",
      value: this.value
    };
  }

  static fromJSON(json: any): NumberNode {
    return new NumberNode(json.value);
  }
}
