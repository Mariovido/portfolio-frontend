# 143. Reorder List

## Intuition

The problem requires reordering a singly-linked list such that the nodes are reordered to alternate between the first half and the reversed second half of the list.

## Approach

1. Find the middle of the linked list using the slow and fast pointer technique.
2. Reverse the second half of the linked list.
3. Merge the first half and the reversed second half by alternately interweaving their nodes.

## Complexity

- Time complexity: `O(n)`

  - Finding the middle of the list takes `O(n)` time.
  - Reversing the second half takes `O(n / 2)` time.
  - Merging the lists takes `O(n)` time.

- Space complexity: `O(1)`. We are not using any additional data structures, only a few pointers.

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
    public void reorderList(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode prev = null;
        ListNode curr = slow;
        ListNode temp;
        while (curr != null) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        ListNode first = head;
        ListNode second = prev;
        while (second.next != null) {
            temp = first.next;
            first.next = second;
            first = temp;

            temp = second.next;
            second.next = first;
            second = temp;
        }
    }
}
```
