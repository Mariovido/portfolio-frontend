# 2816. Double a Number Represented as a Linked List

## Description

Given a non-empty linked list representing a non-negative integer, this problem requires doubling the numeric value represented by the linked list and returning the head of the new linked list that represents the doubled value. The linked list contains digits in reverse order and does not have leading zeroes, except for the number `0` itself.

## Function

```java
public ListNode doubleIt(ListNode head) {}
```

## Input Format

- The linked list's head node is given, where each node contains a single digit.

## Output Format

- Returns the head of the linked list that represents the doubled number.

## Constraints

- `1 <= numberOfNodes <= 10^4`
- `0 <= Node.val <= 9`
- The list represents a non-negative integer without leading zeroes, except the number `0` itself.

## Example

```bash
# Sample Input
head = [1,8,9]

# Sample Output
[3,7,8]
```
