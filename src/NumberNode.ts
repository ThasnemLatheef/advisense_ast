import { ASTNode } from "./ASTNode";

export class NumberNode implements ASTNode {
  constructor(public value: number) {}

  evaluate(): number {
    return this.value;
  }

  print(): string {
    return this.value.toString();
  }
}
