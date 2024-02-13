# 150. Evaluate Reverse Polish Notation

## Description

Given an array of strings representing an arithmetic expression in Reverse Polish Notation (RPN), this problem involves evaluating the expression and returning the integer result. The expression consists of valid operators (`+`, `-`, `*`, `/`) and operands, with division truncating toward zero.

## Function

```java
public int evalRPN(String[] tokens) {}
```

## Input Format

- An array of strings tokens representing the RPN expression.
- The array length is within the range `[1, 10^4]`.
- Each element in tokens is either an operator (`+`, `-`, `*`, `/`) or an integer in the range `[-200, 200]`.

## Output Format

- An integer representing the value of the evaluated expression.

## Constraints

- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator (`+`, `-`, `*`, `/`) or an integer in the range `[-200, 200]`.

## Example

```bash
# Sample Input
String[] tokens1 = {"2","1","+","3","*"};

# Sample Output
9
```
