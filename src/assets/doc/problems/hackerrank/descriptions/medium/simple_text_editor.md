# Simple Text Editor

## Description

Implement a simple text editor that starts with an empty string, `S`. Perform `Q` operations of the following `4` types:

- `append(W)`: Append string `W` to the end of `S`.
- `delete(k)`: Delete the last `k` characters of `S`.
- `print(k)`: Print the `k^{th}` character of `S`.
- `undo()`: Undo the last (not previously undone) operation of type `1` or `2`, reverting `S` to its state prior to that operation.

## Function

```java
public static void main(String[] args) {}
```

## Input Format

- The first line: an integer, `Q`, denoting the number of operations.
- Each subsequent line (`i`) defines an operation. Each operation starts with an integer, `t` (where `t  &#8712; {1,2,3,4}`), denoting the type of operation.
  - For type `1` (append), `t` is followed by the space-separated string `W`.
  - For type `2` (delete), `t` is followed by the integer `k`.
  - For type `3` (print), `t` is followed by the integer `k`.
  - Type `4` (undo) does not require an argument.

## Output Format

- Each operation of type `3` must print the `k^{th}` character on a new line.

## Constraints

- `1 <= Q <= 10^6`
- `1 <= k <= |S|`
- The sum of the lengths of all `W` in the input `<= 10^6`.
- The sum of `k` over all delete operations `<= 2 * 10^6`.
- All input characters are lowercase English letters.
- It is guaranteed that the sequence of operations given as input is possible to perform.

## Example

```bash
# Sample Input
8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1

# Sample Output
c
y
a
```
