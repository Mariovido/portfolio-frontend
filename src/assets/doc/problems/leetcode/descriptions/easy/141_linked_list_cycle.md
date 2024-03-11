# 141. Linked List Cycle

## Description

Given the head of a linked list, the problem involves determining if the linked list has a cycle in it. A cycle in a linked list occurs when some node in the list can be reached again by continuously following the next pointer.

## Function

```java
public boolean hasCycle(ListNode head) {}
```

## Input Format

- The head of the linked list, representing the starting point of the list.

> **Note**: The position `pos` of the cycle's connection is not passed as a parameter.

#### Output Format

- Returns `true` if there is a cycle in the linked list, otherwise returns `false`.

## Constraints

- The number of nodes in the list is in the range `[0, 10^4]`.
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index in the linked list.

## Follow-up

Can you solve it using `O(1)` (i.e. constant) memory?

## Example

```bash
# Sample Input
head = [3,2,0,-4], pos = 1

# Sample Output
true
```
