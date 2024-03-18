# 1171. Remove Zero Sum Consecutive Nodes from Linked List

## Intuition

The problem seems to involve removing sublists whose sum equals zero from a singly-linked list. One approach might be to iterate through the list while keeping track of the prefix sum of elements encountered so far. If the same prefix sum appears again, it indicates that the sublist between the two occurrences has a sum of zero and should be removed.

## Approach

1. Create a `HashMap` to store the prefix sum as the key and the corresponding node as the value.
2. Initialize a `dummy` node and set its next pointer to the `head` of the input list.
3. Initialize the prefix sum as `0`.
4. Traverse the list while updating the prefix sum for each node encountered and store the prefix sum along with its corresponding node in the `HashMap`.
5. Traverse the list again and update the next pointers of nodes to remove sublists with a sum of zero.
6. Return the next node of the `dummy` node, which represents the `head` of the modified list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the list. We traverse the list twice, each time with a single pass.

- Space complexity: `O(n)`, where `n` is the number of nodes in the list. We use extra space to store the prefix sums in the `HashMap`.

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
    public ListNode removeZeroSumSublists(ListNode head) {
        HashMap<Integer, ListNode> prefixSumToNode = new HashMap<>();

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        int prefixSum = 0;

        for (ListNode iter = dummy; iter != null; iter = iter.next) {
            prefixSum += iter.val;
            prefixSumToNode.put(prefixSum, iter);
        }

        prefixSum = 0;
        for (ListNode iter = dummy; iter != null; iter = iter.next) {
            prefixSum += iter.val;
            iter.next = prefixSumToNode.get(prefixSum).next;
        }

        return dummy.next;
    }
}
```
