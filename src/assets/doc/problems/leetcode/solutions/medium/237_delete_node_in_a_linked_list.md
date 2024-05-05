# 237. Delete Node in a Linked List

## Intuition

The intuition behind this problem is to delete a node in a singly-linked list without being given access to the head of the list. Since we can only access the node to be deleted, we need to manipulate the values and pointers of the nodes to achieve the deletion.

## Approach

1. Copy the value of the next node to the current node.
2. Update the next pointer of the current node to skip the next node, effectively removing it from the list.

## Complexity

- Time complexity: `O(1)` because we only perform constant-time operations regardless of the size of the linked list.

- Space complexity: `O(1)` because we are not using any extra space that grows with the size of the input. We are simply manipulating the existing nodes in the linked list.

## Code

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```
