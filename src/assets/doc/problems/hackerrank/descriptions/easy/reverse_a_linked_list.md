# Reverse a linked list

## Description

Given the pointer to the head node of a linked list, the task is to reverse the order of the nodes by manipulating their next pointers. The head pointer may be null, indicating an empty list.

## Function

```java
public static SinglyLinkedListNode reverse(SinglyLinkedListNode llist) {}
```

## Input Format

- The first line contains an integer `t`, the number of test cases.
- Each test case has the following format:
  - The first line contains an integer `n`, the number of elements in the linked list.
  - Each of the next `n` lines contains an integer, the data values of the elements in the linked list.

## Output Format

- `SinglyLinkedListNode` pointer: a reference to the head of the reversed list.

## Constraints

- `1 <= t <= 10`
- `1 <= n <= 1000`
- `1 <= list[i] <= 1000`, where `list[i]` is the `i^{th}` element in the list.

## Example

```bash
# Sample Input
1
5
1
2
3
4
5

# Sample Output
5 4 3 2 1
```
