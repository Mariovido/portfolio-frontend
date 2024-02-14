# Merge two sorted linked lists

## Description

Given pointers to the heads of two sorted linked lists, this problem involves merging them into a single, sorted linked list. Either head pointer may be null, meaning that the corresponding list is empty.

## Function

```java
static SinglyLinkedListNode mergeLists(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {}
```

## Input Format

- The first line contains an integer `t`, the number of test cases.
- For each test case:
  - The first line contains an integer `n`, the length of the first linked list.
  - The next `n` lines contain an integer each, the elements of the first linked list.
  - The next line contains an integer `m`, the length of the second linked list.
  - The next `m` lines contain an integer each, the elements of the second linked list.

## Output Format

- `SinglyLinkedListNode` pointer: a reference to the head of the merged list.

## Constraints

- `1 <= t <= 10`
- `1 <= n, m <= 1000`
- `1 <= list[i] <= 1000`, where `list[i]` is the `i^{th}` element of the list.

## Example

```bash
# Sample Input
1
3
1
2
3
2
3
4

# Sample Output
1 2 3 3 4
```
