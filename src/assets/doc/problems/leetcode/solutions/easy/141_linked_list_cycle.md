# 141. Linked List Cycle

## Intuition

The intuition behind this code is to use the `slow` and `fast` pointers technique to detect if there's a cycle in a singly-linked list. By advancing the `slow` pointer one step at a time and the `fast` pointer two steps at a time, if there's a cycle, eventually, both pointers will meet at some point within the cycle.

## Approach

1. Check if the `head` of the linked list is `null` or if there's only one node (`head.next` is `null`), return `false` because there can't be a cycle in these cases.
2. Initialize two pointers: `slow` and `fast`. `slow` moves one step at a time while `fast` moves two steps at a time.
3. Traverse the list with both pointers simultaneously.
4. If there's a cycle, at some point, the `slow` and `fast` pointers will meet. If they meet, return `true`.
5. If the `fast` pointer reaches the end of the list (`fast == null || fast.next == null`), it means there's no cycle, so return `false`.

## Complexity

- Time complexity: `O(n)`

  - In the worst case, where there is no cycle, both pointers will traverse the entire linked list, which takes `O(n)` time, where `n` is the number of nodes in the list.

- Space complexity: `O(1)` because only a constant amount of extra space is used, regardless of the size of the input linked list.

## Code

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;

        ListNode slow = head;
        ListNode fast = head.next;

        while (slow != fast) {
            if (fast == null || fast.next == null) return false;

            slow = slow.next;
            fast = fast.next.next;
        }

        return true;
    }
}
```
