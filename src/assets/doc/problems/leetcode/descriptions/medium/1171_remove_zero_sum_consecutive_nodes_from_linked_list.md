# 1171. Remove Zero Sum Consecutive Nodes from Linked List

## Description

This problem involves manipulating a linked list to repeatedly remove consecutive sequences of nodes that sum to zero. The challenge requires updating the linked list until no such sequences remain and returning the head of the modified list. The solution may produce any valid resulting linked list where no consecutive sequence sums to zero.

## Function

```java
public ListNode removeZeroSumSublists(ListNode head) {}
```

## Input Format

- A single line representing the nodes of the linked list in order, where each node's value is an integer between `-1000` and `1000`.

## Output Format

- The modified linked list with no consecutive sequences of nodes that sum to `0`. The output should be the head of the final linked list.

## Constraints

- The linked list will contain between `1` and `1000` nodes.
- Each node's value will be between `-1000` and `1000`.

## Example

```bash
# Sample Input
head = [1,2,-3,3,1]

# Sample Output
[3,1]
```
