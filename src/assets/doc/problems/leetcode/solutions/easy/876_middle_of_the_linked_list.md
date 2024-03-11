# 876. Middle of the Linked List

## Intuition

The problem aims to find the middle node of a singly-linked list. An intuitive approach is to use two pointers: one slow pointer and one fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. When the fast pointer reaches the end of the list, the slow pointer will be at the middle of the list.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the `head` of the linked list.
2. Iterate through the linked list using the fast pointer. Move `slow` one step forward and `fast` two steps forward in each iteration until `fast` reaches the end of the list or `fast.next` becomes `null`.
3. At the end of the loop, the `slow` pointer will be at the middle node of the linked list.
4. Return the node pointed by the `slow` pointer as the middle node.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. Both pointers traverse the list simultaneously, and in the worst case, they traverse the entire list once.

- Space complexity: `O(1)`, as we are using only a constant amount of extra space regardless of the size of the input linked list.

## Code

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}
```
