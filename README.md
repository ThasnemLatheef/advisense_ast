# DSL Arithmetic Evaluator

A minimal DSL interpreter for arithmetic expressions using an Abstract Syntax Tree in TypeScript.

## Features
- Numeric literals
- Arithmetic operations: `+`, `-`, `*`, `/`
- Comparison  operations: `>`,`<`,`<=`,`>=`,`==`(Bonus)
- Error handling (e.g., division by zero)
- String representation of expressions (Bonus)

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
```

### Run Tests
```bash
npm test
```

## Assumptions
- Input is always a valid AST; no parser is implemented.
- Operators are limited to basic arithmetic.

## AI Usage
This implementation was assisted by ChatGPT and Github CoPilot to ensure clean structure and bonus feature coverage.
