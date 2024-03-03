# 19. Remove Nth Node From End of List

## Description

Given the head of a linked list, this problem involves removing the nth node from the end of the list and returning its head.

## Function

```java
public ListNode removeNthFromEnd(ListNode head, int n) {}
```

## Input Format

- The head of the linked list.
- An integer, `n`, representing the position of the node to remove from the end of the list.

## Output Format

- The head of the modified linked list after removing the nth node from the end.

## Constraints

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

## Follow-up

Could you do this in one pass?

## Example

```bash
# Sample Input
head = [1,2,3,4,5], n = 2

# Sample Output
[1,2,3,5]
```
