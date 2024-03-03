# 19. Remove Nth Node From End of List

## Intuition

The problem involves removing the `n^{th}` node from the end of a singly-linked list. To efficiently accomplish this, we can utilize two pointers, one moving `n` steps ahead of the other. When the fast pointer reaches the end of the list, the slow pointer will be at the node just before the target node to be removed.

## Approach

1. Create a `dummy` node and set it as the `head` of the list.
2. Initialize two pointers, `left` and `right`, both pointing to the `dummy` node.
3. Move the `right` pointer `n` steps forward.
4. Move both pointers simultaneously until the `right` pointer reaches the end of the list.
5. The `left` pointer will be pointing to the node just before the target node to be removed.
6. Update the pointers to remove the `n^{th}` node from the end.
7. Return the modified list.

## Complexity

- Time complexity: `O(N)`, where `N` is the number of nodes in the linked list. We traverse the list twice, once to find the length of the list and then to find the target node.

- Space complexity: `O(1)`, as we are using only a constant amount of extra space for two pointers.

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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode left = dummy;
        ListNode right = dummy;

        for (int i = 0; i <= n; i++) {
            right = right.next;
        }

        while (right != null) {
            left = left.next;
            right = right.next;
        }

        left.next = left.next.next;

        return dummy.next;
    }
}
```
