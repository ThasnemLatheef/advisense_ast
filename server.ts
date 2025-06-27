import express, { Request, Response } from "express";
import { NumberNode } from "./src/NumberNode";
import { BinaryOperationNode } from "./src/BinaryOperationNode";

const app = express();
app.use(express.json());

function tokenize(input: string): string[] {
  return input.replace(/([()+\-*/])/g, " $1 ").trim().split(/\s+/);
}

function parseExpression(tokens: string[]): NumberNode | BinaryOperationNode {
  const stack: any[] = [];

  tokens.forEach((token) => {
    if (!isNaN(Number(token))) {
      stack.push(new NumberNode(Number(token)));
    } else if (['+', '-', '*', '/'].includes(token)) {
      stack.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      const right = stack.pop();
      const operator = stack.pop();
      const left = stack.pop();
      stack.pop(); // Remove matching '('
      stack.push(new BinaryOperationNode(left, right, operator));
    }
  });

  if (stack.length !== 1) {
    throw new Error("Invalid expression format.");
  }

  return stack[0];
}

app.post("/evaluate", (req: any, res: any) => {
  const { expression } = req.body;

  if (!expression || typeof expression !== "string") {
    return res.status(400).json({ error: "Invalid 'expression' field." });
  }

  try {
    const tokens = tokenize(expression);
    const ast = parseExpression(tokens);

    return res.json({
      printed: ast.print(),
      result: ast.evaluate(),
      serialized: ast.toJSON()
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
