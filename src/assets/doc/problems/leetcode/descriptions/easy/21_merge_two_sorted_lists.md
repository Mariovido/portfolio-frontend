# 21. Merge Two Sorted Lists

## Description

Given the heads of two sorted linked lists `list1` and `list2`, the task is to merge them into one sorted list by splicing together the nodes of the first two lists.

## Function

```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {}
```

## Input Format

- The heads of two sorted linked lists `list1` and `list2`.

## Output Format

- The head of the merged linked list.

## Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Example

```bash
# Sample Input
list1 = [1,2,4], list2 = [1,3,4]

# Sample Output
[1,1,2,3,4,4]
```
