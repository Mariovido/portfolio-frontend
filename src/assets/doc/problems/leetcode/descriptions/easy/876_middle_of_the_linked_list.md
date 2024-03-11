# 876. Middle of the Linked List

## Description

This challenge involves identifying and returning the middle node of a singly linked list. In cases where the list has an even number of nodes, the second of the two middle nodes should be returned. This problem tests one's understanding of linked list traversal and manipulation techniques.

## Function

```java
public ListNode middleNode(ListNode head) {}
```

## Input Format

- `head`: The head node of a singly linked list with node values in the range `[1, 100]`.

## Output Format

- Return the middle node. If the list has two middle nodes, return the second middle node.

## Constraints

- The number of nodes in the list is in the range `[1, 100]`.
- `1 <= Node.val <= 100`

## Example

```bash
# Sample Input
head = [1,2,3,4,5]

# Sample Output
[3,4,5]
```
