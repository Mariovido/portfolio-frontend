# 736. Parse Lisp Expression

## Description

This problem involves evaluating a Lisp-like expression represented by a string to return the integer value. The expression may include let expressions, add expressions, mult expressions, and assigned variables. Expressions always evaluate to a single integer, and the syntax is defined as follows:

- An expression is either an integer, let expression, add expression, mult expression, or an assigned variable.
- A let expression takes the form `(let v1 e1 v2 e2 ... vn en expr)`, where there are one or more pairs of alternating variables and expressions. The value of the expression is the value of the last expression expr.
- An add expression takes the form `(add e1 e2)` with two expressions `e1` and `e2`, and the result is the addition of their evaluations.
- A mult expression takes the form `(mult e1 e2)` with two expressions `e1` and `e2`, and the result is the multiplication of their evaluations.
- Variables start with a lowercase letter, followed by zero or more lowercase letters or digits. The names `add`, `let`, and `mult` are protected and will never be used as variable names.

## Function

```java
public int evaluate(String expression) {}
```

## Input Format

- A string `expression` representing a Lisp-like expression.

## Output Format

- An integer, the result of evaluating the expression.

## Constraints

- `1 <= expression.length <= 2000`
- No leading or trailing spaces in `expression`.
- All tokens are separated by a single space in `expression`.
- The answer and all intermediate calculations of that answer are guaranteed to fit in a `32`-bit integer.
- The `expression` is guaranteed to be legal and evaluate to an integer.

## Example

```bash
# Sample Input
String expression1 = "(let x 2 (mult x (let x 3 y 4 (add x y))))";

# Sample Output
14
```
