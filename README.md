# DSL Arithmetic Evaluator

A minimal DSL interpreter for arithmetic expressions using an Abstract Syntax Tree in TypeScript.

## Features
- Numeric literals
- Arithmetic operations: `+`, `-`, `*`, `/`
- Comparison operations (Bonus): `>`, `<`, `<=`, `>=`, `==`
- Error handling (e.g., division by zero)
- String representation of expressions (Bonus)
- Expression serialization and deserialization (Bonus)
- Command-line interface (CLI) for evaluating expressions (Bonus)

## Project Structure
```
src/
  ASTNode.ts
  NumberNode.ts
  BinaryOperationNode.ts
test/
  NumberNode.test.ts
  BinaryOperationNode.test.ts
```

## Getting Started

### Install dependencies
```bash
npm install
npm install --save-dev ts-node typescript

```

### Run Tests
```bash
npm test
```

# cli usage
npm run cli -- "((4 / 2) + (3 * 5))"
<br>Outputs the printed expression, numeric result, and its JSON serialization.<br>

## Assumptions
- Input is always a valid AST; no parser is implemented.
- Operators are limited to basic arithmetic.

## AI Usage
This implementation was assisted by ChatGPT and Github CoPilot to ensure clean structure and bonus feature coverage.
