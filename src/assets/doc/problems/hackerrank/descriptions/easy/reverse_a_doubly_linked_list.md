# Reverse a doubly linked list

## Description

Given the pointer to the head node of a doubly linked list, the problem involves reversing the order of the nodes in place. This requires changing the `next` and `prev` pointers of the nodes so that the direction of the list is reversed. The goal is to return a reference to the head node of the reversed list.

## Function

```java
public static DoublyLinkedListNode reverse(DoublyLinkedListNode llist) {}
```

## Input Format

- The first line contains an integer `t`, the number of test cases.
- Each test case is of the following format:
  - The first line contains an integer `n`, the number of elements in the linked list.
  - The next `n` lines contain an integer each denoting an element of the linked list.

## Output Format

- Return a reference to the head of your reversed list. The provided code will print the reversed array as a one line of space-separated integers for each test case.
- `DoublyLinkedListNode`: a reference to the head of the reversed list

## Constraints

- `1 <= t <= 10`
- `0 <= n <= 1000`
- `0 <= DoublyLinkedListNode.data <= 1000`

## Example

```bash
# Sample Input
1
4
1
2
3
4

# Sample Output
4 3 2 1
```
