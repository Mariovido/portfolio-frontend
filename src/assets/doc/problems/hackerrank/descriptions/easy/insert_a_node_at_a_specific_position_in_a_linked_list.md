# Insert a node at a specific position in a linked list

## Description

Given the pointer to the head node of a linked list and an integer to insert at a certain position, this problem involves creating a new node with the given integer as its data attribute, inserting this node at the desired position, and returning the head node.

## Function

```java
public static SinglyLinkedListNode insertNodeAtPosition(SinglyLinkedListNode llist, int data, int position) {}
```

## Input Format

- The first line: an integer `n`, the number of elements in the linked list.
- Each of the next `n` lines contains an integer `SinglyLinkedListNode[i].data`.
- The next line contains an integer `data`, the data of the node that is to be inserted.
- The last line contains an integer `position`, the position to insert the new node (zero-based indexing).

## Output Format

- `SinglyLinkedListNode` pointer: a reference to the head of the revised list.

## Constraints

- `1 <= n <= 1000`
- `1 <= SinglyLinkedListNode[i].data <= 1000`
- `0 <= position <= n`

## Example

```bash
# Sample Input
3
16
13
7
1
2

# Sample Output
16 13 1 7
```
