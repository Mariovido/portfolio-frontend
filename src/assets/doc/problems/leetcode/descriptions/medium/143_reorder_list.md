# 143. Reorder List

## Description

This challenge requires reordering the nodes of a singly linked-list in a specific pattern without altering the nodes' values. Given a linked list `L0` &rarr; `L1` &rarr; `…` &rarr; `Ln - 1` &rarr; `Ln`, it should be reordered to `L0` &rarr; `Ln` &rarr; `L1` &rarr; `Ln - 1` &rarr; `L2` &rarr; `Ln - 2` &rarr; `…`.

## Function

```java
public void reorderList(ListNode head) {}
```

## Input Format

- A singly linked list represented as `L0` &rarr; `L1` &rarr; `…` &rarr; `Ln - 1` &rarr; `Ln`.

## Output Format

- The list is reordered to `L0` &rarr; `Ln` &rarr; `L1` &rarr; `Ln - 1` &rarr; `L2` &rarr; `Ln - 2` &rarr; `…` without modifying node values.

## Constraints

- The number of nodes in the list is within the range `[1, 5 * 10^4]`.
- Node values are in the range `[1, 1000]`.

## Example

```bash
# Sample Input
head = [1,2,3,4]

# Sample Output
[1,4,2,3]
```
