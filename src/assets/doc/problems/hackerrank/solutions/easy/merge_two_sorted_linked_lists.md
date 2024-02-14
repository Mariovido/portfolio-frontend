# Merge two sorted linked lists

## Intuition

This problem seems to be about merging two sorted linked lists into one sorted linked list. Given that the input lists are already sorted, we can likely take advantage of this property to efficiently merge them.

## Approach

The approach here appears to be a recursive solution. The function `mergeLists` takes two parameters, `head1` and `head2`, which represent the heads of the two sorted linked lists to be merged. It compares the data of the current nodes of both lists. If the data of `head1` is less than the data of `head2`, then `head1` should be the next node in the merged list, so we recursively call `mergeLists` with `head1.next` and `head2`, and update the next pointer of `head1` to the result of this recursive call. Otherwise, we do the same with `head2` and `head1.next`. We repeat this process until we reach the end of either list, at which point we return the non-null head of the other list since it is already sorted.

## Complexity

- Time complexity: `O(n + m)` where `n` and `m` are the lengths of the two input linked lists. This is because in the worst case, we traverse through both lists entirely once.

- Space complexity: `O(n + m)` for the recursive stack space, where `n` and `m` are the lengths of the two input linked lists. This is because the depth of recursion can be at most `n + m` if both lists are fully traversed.

## Code

```java
class Solution {
    /*
     * For your reference:
     *
     * SinglyLinkedListNode {
     *     int data;
     *     SinglyLinkedListNode next;
     * }
     *
     */
    static SinglyLinkedListNode mergeLists(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {
        if (head1 == null) return head2;
        if (head2 == null) return head1;

        if (head1.data < head2.data) {
            head1.next = mergeLists(head1.next, head2);
            return head1;
        } else {
            head2.next = mergeLists(head1, head2.next);
            return head2;
        }
    }
}
```
