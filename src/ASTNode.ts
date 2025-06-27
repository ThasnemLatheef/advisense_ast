export interface ASTNode {
  evaluate(): number;
  print(): string;
  toJSON(): any;
}
