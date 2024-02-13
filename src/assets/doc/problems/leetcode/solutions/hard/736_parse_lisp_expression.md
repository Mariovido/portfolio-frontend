# 736. Parse Lisp Expression

## Intuition

The given code appears to be an implementation of an expression evaluator for a specific type of expression involving arithmetic operations and variables. The expression is provided as a string, and the code recursively evaluates it.

## Approach

The approach of the code is to use a recursive function (`evaluate()`) to traverse and evaluate the given expression. The expression is parsed character by character, and different cases are handled for literals, variables, addition, multiplication, and nested expressions within parentheses. The code uses a HashMap (`scope`) to keep track of variable values in different scopes.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input expression. The recursive function processes each character once, and the overall time complexity is linear with respect to the length of the input.

- Space complexity: `O(m)`, where `m` is the maximum depth of nested expressions. The space complexity is primarily determined by the recursion depth, and the HashMap (`scope`) is used to store variable values. The maximum depth of recursion depends on the nesting of parentheses in the expression.

## Code

```java
class Solution {
    String expression;
    int index;
    HashMap<String, Deque<Integer>> scope;

    public int evaluate(String expression) {
        this.expression = expression;
        index = 0;
        scope = new HashMap<>();
        return evaluate();
    }

    private int evaluate(){
        if (expression.charAt(index) == '(') {
            index++;
            char begin = expression.charAt(index);
            int ret;

            if (begin == 'l') {
                index += 4;
                ArrayList<String> vars = new ArrayList<>();

                while (true) {
                    if (!Character.isLowerCase(expression.charAt(index))) {
                        ret = evaluate();
                        break;
                    }

                    String var = parseVar();
                    if (expression.charAt(index) == ')') {
                        ret = scope.get(var).peek();
                        break;
                    }

                    vars.add(var);
                    index++;
                    int e = evaluate();
                    scope.putIfAbsent(var, new LinkedList<>());
                    scope.get(var).push(e);
                    index++;
                }

                vars.forEach(var -> scope.get(var).pop());
            } else if (begin == 'a') {
                index += 4;
                int v1 = evaluate();
                index++;
                int v2 = evaluate();
                ret = v1 + v2;
            } else {
                index += 5;
                int v1 = evaluate();
                index++;
                int v2 = evaluate();
                ret = v1 * v2;
            }

            index++;
            return ret;
        } else {
            if (Character.isLowerCase(expression.charAt(index))) {
                String var = parseVar();
                return scope.get(var).peek();
            } else {
                return parseInt();
            }
        }
    }

    private int parseInt() {
        boolean negative = expression.charAt(index) == '-';
        if (negative) index++;

        int ret = 0;

        while (Character.isDigit(expression.charAt(index))) {
            ret = ret * 10 + (expression.charAt(index) - '0');
            index++;
        }

        return negative ? -ret : ret;
    }

    private String parseVar() {
        StringBuilder sb = new StringBuilder();
        while (Character.isLetterOrDigit(expression.charAt(index))) {
            sb.append(expression.charAt(index++));
        }
        return sb.toString();
    }
}
```
