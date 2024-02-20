# 206. Reverse Linked List

## Intuition

The problem requires reversing a singly-linked list, either iteratively or recursively. The iterative approach involves traversing the list while maintaining references to the previous, current, and next nodes, reversing the pointers as the traversal progresses. The recursive approach involves recursively traversing to the end of the list and then reversing the pointers while backtracking.

## Approach

### Iterative

1. Initialize `prev` to `null` and `curr` to the `head` of the list.
2. Traverse the list while `curr` is not `null`.
3. Within each iteration, store `curr.next` in a temporary variable `nextTemp`.
4. Reverse the pointer of `curr` to point to `prev`.
5. Update `prev` to `curr` and `curr` to `nextTemp`.
6. Finally, return `prev`, which points to the new head of the reversed list.

### Recursive

1. Base case: If the `head` is `null` or the head's next node is `null`, return the `head`.
2. Recursively call the function to reverse the sublist starting from the next node.
3. Once the recursion reaches the end of the list, set the next node's next pointer to point back to the current node.
4. Set the current node's next pointer to `null` to break the original link.
5. Return the new `head` of the reversed list.

## Complexity

- Time complexity:

  - Iterative: `O(n)`, where `n` is the number of nodes in the list, as each node is visited once.
  - Recursive: `O(n)`, where `n` is the number of nodes in the list, as each node is visited once during recursion.

- Space complexity:
  - Iterative: `O(1)`, as only a constant amount of extra space is used for storing temporary variables.
  - Recursive: `O(n)`, where `n` is the depth of the recursion stack, which is equivalent to the number of nodes in the list.

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
    // Iterative
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        return prev;
    }

    // Recursive
    // public ListNode reverseList(ListNode head) {
    //     if (head == null || head.next == null) {
    //         return head;
    //     }

    //     ListNode reversedList = reverseList(head.next);
    //     head.next.next = head;
    //     head.next = null;

    //     return reversedList;
    // }
}
```
