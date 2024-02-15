# QHEAP1

## Description

This problem involves performing basic heap operations using three types of queries: adding an element to the heap, deleting an element from the heap, and printing the minimum element in the heap. Distinct elements are guaranteed in the heap, and the input queries dictate the operations to be performed.

## Function

```java
public static void main(String[] args) {}
```

## Input Format

- The first line: the number of queries, `Q` &rarr; `1 <= Q <= 10^5`.
- Each of the next `Q` lines: one of the types of queries
  - `1 v` - Add an element `v` to the heap.
  - `2 v` - Delete the element `v` from the heap.
  - `3` - Print the minimum of all the elements in the heap.

## Output Format

- For each query of type `3`, print the minimum value on a single line.

## Constraints

- `1 <= Q <= 10^5`
- `-10^9 <= v <= 10^9`

## Example

```bash
# Sample Input
5
1 4
1 9
3
2 4
3

# Sample Output
4
9
```
