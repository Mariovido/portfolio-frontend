# 21. Merge Two Sorted Lists

## Intuition

The problem requires merging two sorted linked lists into a single sorted linked list. The intuition here is to compare the values of the nodes from both lists and merge them in such a way that the resultant list remains sorted.

## Approach

1. Start with checking if either of the input lists is `null`. If one of them is `null`, return the other list because merging with a `null` list would just return the non-null list itself.
2. Compare the values of the heads of both lists.
3. Select the smaller value among the heads as the head of the merged list.
4. Recursively call the merge function on the remaining parts of the lists, while updating the next pointer of the selected node.
5. Return the merged list.

## Complexity

- Time complexity: `O(n + m)`, where `n` and `m` are the lengths of the two input lists respectively. This is because in the worst case scenario, we may need to traverse all nodes of both lists once to merge them.

- Space complexity: `O(n + m)`, where `n` and `m` are the lengths of the two input lists respectively. This space is used for the recursive calls on the call stack, which can go as deep as the total number of nodes in both lists.

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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
```
