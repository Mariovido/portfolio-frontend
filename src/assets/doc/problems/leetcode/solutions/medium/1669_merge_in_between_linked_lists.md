# 1669. Merge In Between Linked Lists

## Intuition

The problem requires merging a second linked list, `list2`, into the first linked list, `list1`, between indices `a` and `b` inclusive. To do this efficiently, we need to identify the nodes before and after the range `[a, b]` in `list1` to properly connect `list2`.

## Approach

1. Initialize two pointers, `prev` and `temp`, to traverse `list1`.
2. Move `temp` to the node at index `a` and `prev` to the node before `temp`.
3. Move `temp` to the node at index `b + 1` to identify the node after the range `[a, b]`.
4. Connect the last node of `list2` to `afterB`.
5. Connect the last node of `list1` before range `[a, b]` to the head of `list2`.
6. Return `list1`.

## Complexity

- Time complexity: `O(n + m)` where `n` is the length of list1 and `m` is the length of list2.

- Space complexity: `O(1)` since we are using only a constant amount of extra space for pointers and variables.

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
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode prev = null;
        ListNode temp = list1;

        for(int i = 0; i < a; i++) {
            prev = temp;
            temp = temp.next;
        }

        ListNode afterB = temp;
        for(int i = a; i <= b; i++) {
            afterB = afterB.next;
        }

        prev.next = list2;
        while(list2.next != null) {
            list2 = list2.next;
        }

        list2.next = afterB;
        return list1;
    }
}
```
