#!/usr/bin/env node
import { NumberNode } from "./src/NumberNode";
import { BinaryOperationNode } from "./src/BinaryOperationNode";

// ── Tokenizer: converts a string like "(1 + 2) * 3" into tokens ──
function tokenize(input: string): string[] {
  return input.replace(/([()+\-*/])/g, " $1 ").trim().split(/\s+/);
}

// ── Parser: builds an AST from fully parenthesized input ──
function parseExpression(tokens: string[]): NumberNode | BinaryOperationNode {
  const stack: any[] = [];

  const pushToken = (tok: string) => {
    if (!isNaN(Number(tok))) {
      stack.push(new NumberNode(Number(tok)));
    } else if (['+', '-', '*', '/'].includes(tok)) {
      stack.push(tok);
    } else if (tok === '(') {
      stack.push(tok);
    } else if (tok === ')') {
      const right = stack.pop();
      const op = stack.pop();
      const left = stack.pop();
      stack.pop(); // discard matching "("
      stack.push(new BinaryOperationNode(left, right, op));
    }
  };

  tokens.forEach(pushToken);

  if (stack.length !== 1) {
    throw new Error("Invalid expression");
  }

  return stack[0];
}

// ── CLI Entry Point ──
function main() {
  const input = process.argv.slice(2).join(' ');
  if (!input) {
    console.log('Usage: ts-node cli.ts "((1 + 2) * 3)"');
    return;
  }

  try {
    const tokens = tokenize(input);
    const ast = parseExpression(tokens);

    console.log("Input:      ", input);
    console.log("Printed AST:", ast.print());
    console.log("Result:     ", ast.evaluate());
    console.log("Serialized: ", JSON.stringify(ast.toJSON(), null, 2));
  } catch (err: any) {
    console.error("Error:", err.message);
  }
}

main();
