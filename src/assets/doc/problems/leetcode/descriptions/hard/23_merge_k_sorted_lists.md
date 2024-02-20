# 23. Merge k Sorted Lists

## Description

Given an array of `k` linked lists, each linked list is sorted in ascending order. The task is to merge all the linked lists into one sorted linked list and return it.

## Function

```java
public ListNode mergeKLists(ListNode[] lists) {}
```

## Input Format

- An array of `k` linked lists, where each linked list is represented by its head node.
- The length of the array (`k`) and the number of elements in each linked list can vary.

## Output Format

- A single sorted linked list obtained by merging all the input linked lists.

## Constraints

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- Each linked list `lists[i]` is sorted in ascending order.
- The sum of the lengths of all lists will not exceed `10^4`.

## Example

```bash
# Sample Input
lists = [[1,4,5],[1,3,4],[2,6]]

# Sample Output
[1,1,2,3,4,4,5,6]
```
