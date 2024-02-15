# Queue using Two Stacks

## Description

This problem involves implementing a queue using two stacks. The queue supports three types of operations: enqueue, dequeue, and print the element at the front of the queue.

## Function

```java
public static void main(String[] args) {}
```

## Input Format

- The first line contains a single integer, `q`, denoting the number of queries &rarr; `1 <= q <= 10^5`.
- Each subsequent line `i` of the `q` lines contains a single query in the form described below:
  - Query Type 1: `1 x` - Enqueue element x into the end of the queue &rarr; `1 <= |x| <= 10^9`.
  - Query Type 2: `2` - Dequeue the element at the front of the queue.
  - Query Type 3: `3` - Print the element at the front of the queue.

## Output Format

- For each query of type `3`, print the value of the element at the front of the queue on a new line.

## Constraints

- `1 <= q <= 10^5`
- `1 <= type <= 3`
- `1 <= |x| <= 10^9`
- It is guaranteed that a valid answer always exists for each query of type `3`.

## Example

```bash
# Sample Input
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2

# Sample Output
14
14
```
