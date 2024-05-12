# 2816. Double a Number Represented as a Linked List

## Intuition

The task is to multiply each node's value in a linked list by two, and correctly manage the carrying over in case of values exceeding 9 (similar to addition in linked list). Given the difficulty in handling carries when traversing from head to tail in singly linked lists, my first thought is to reverse the linked list first. This reversal will allow easy addition from the least significant to the most significant digit, simplifying carry management. After processing the multiplication, the list will be reversed again to restore the original order.

## Approach

1. **Reverse the List**: Start by reversing the input linked list. This manipulation helps handle the carries efficiently, starting from the least significant digit.
2. **Multiply and Handle Carries**: Traverse the reversed list. For each node:
   - Multiply the node's value by two and add any carry from the previous node.
   - Store the unit place of the result in the current node.
   - Update the carry with the tens place of the result.
3. **Handle Remaining Carry**: After the traversal, if there is any remaining carry (carry not equal to zero), append a new node at the end of the list with the carry as its value.
4. **Re-reverse the List**: Reverse the list again to restore the original order before the multiplications. This step ensures the output list maintains the same sequence as the input but with doubled values.
5. **Return the Result**: Return the head of the modified list which now represents the doubled values, correctly handling any carries.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. The list is traversed a maximum of three times: once for the initial reversal, once for the multiplication, and once more to reverse it back to the original order.

- Space complexity: `O(1)` because only a constant amount of additional space is used, regardless of the input list size. All operations are performed in-place, with just a few pointers to manage the nodes.

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
    public ListNode doubleIt(ListNode head) {
        ListNode reversedList = reverseList(head);
        int carry = 0;
        ListNode current = reversedList;
        ListNode previous = null;

        while (current != null) {
            int newValue = current.val * 2 + carry;
            current.val = newValue % 10;

            if (newValue > 9) carry = 1;
            else carry = 0;

            previous = current;
            current = current.next;
        }

        if (carry != 0) {
            ListNode extraNode = new ListNode(carry);
            previous.next = extraNode;
        }

        ListNode result = reverseList(reversedList);

        return result;
    }

    public ListNode reverseList(ListNode node) {
        ListNode previous = null;
        ListNode current = node;
        ListNode nextNode;

        while (current != null) {
            nextNode = current.next;
            current.next = previous;

            previous = current;
            current = nextNode;
        }

        return previous;
    }
}
```
