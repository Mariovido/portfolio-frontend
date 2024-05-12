# 2487. Remove Nodes From Linked List

## Description

This problem involves removing nodes from a singly linked list if there exists a node with a higher value to its right. The function will traverse from left to right, removing any node that does not meet the criteria of having the highest subsequent value in the remaining part of the list.

## Function

```java
public ListNode removeNodes(ListNode head) {}
```

## Input Format

- The function accepts `head`, the head node of the singly linked list.

## Output Format

- The function returns the head of the modified linked list where every node does not have a node with a greater value to its right.

## Constraints

- The number of nodes in the linked list is between `1` and `10^5`.
- Node values range between `1` and `10^5`.

## Example

```bash
# Sample Input
head = [5,2,13,3,8]

# Sample Output
[13,8]
```
