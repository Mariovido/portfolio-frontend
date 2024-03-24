# 234. Palindrome Linked List

## Intuition

The problem involves determining whether a given linked list is a palindrome or not. A palindrome is a sequence that reads the same forwards and backwards. One approach to solve this problem is to reverse the second half of the list and compare it with the first half to check if they match.

## Approach

1. Initialize two pointers, `slow` and `fast`, both pointing to the `head` of the linked list.
2. Move the `slow` pointer one step at a time and the `fast` pointer two steps at a time until the `fast` pointer reaches the end of the list or falls off.
3. By the time the `fast` pointer reaches the end (or falls off), the `slow` pointer will be at the middle of the list.
4. Reverse the second half of the list starting from the `slow` pointer.
5. Reset the `fast` pointer to the `head` of the list and continue traversing both halves of the list (first half using `fast` and second half using `slow`).
6. Compare the values of nodes from both halves. If any pair of nodes does not match, return `false`. If all pairs match, return `true`.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. This is because we traverse the entire list twice, once to find the middle and once to compare the values.

- Space complexity: `O(1)`, as we only use a constant amount of extra space for pointers and variables.

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
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        if (fast != null) slow = slow.next;

        slow = reverseList(slow);
        fast = head;

        while (slow != null) {
            if (fast.val != slow.val) return false;
            fast = fast.next;
            slow = slow.next;
        }

        return true;
    }

    private ListNode reverseList(ListNode head) {
        ListNode prev = null;

        while (head != null) {
            ListNode nextNode = head.next;
            head.next = prev;
            prev = head;
            head = nextNode;
        }

        return prev;
    }
}
```
