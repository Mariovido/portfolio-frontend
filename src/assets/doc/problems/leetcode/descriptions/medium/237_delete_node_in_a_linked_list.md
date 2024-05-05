# 237. Delete Node in a Linked List

## Description

Given a singly-linked list `head` and a node `node` to be deleted, this problem involves removing the given node from the linked list while maintaining the order of elements.

## Function

```java
public void deleteNode(ListNode node) {}
```

## Input Format

- The linked list `head`.
- The node to be deleted, `node`, which is not the last node of the list and is an actual node in the list.

## Output Format

- The entire list after deleting the given node.

## Constraints

- The number of nodes in the given list is in the range `[2, 1000]`.
- `-1000 <= Node.val <= 1000`
- The value of each node in the list is unique.
- The node to be deleted is in the list and is not a tail node.

## Custom Testing

- Provide the entire linked list `head` and the node to be deleted `node`.
- The output will be the entire list after calling the `deleteNode` function.

## Example

```bash
# Sample Input
head = [4,5,1,9], node = 5

# Sample Output
[4,1,9]
```
