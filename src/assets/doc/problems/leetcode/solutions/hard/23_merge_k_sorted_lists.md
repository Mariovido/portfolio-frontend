# 23. Merge k Sorted Lists

## Intuition

The problem involves merging k sorted linked lists into one sorted linked list. One way to approach this is by utilizing a priority queue. Since the input lists are already sorted, at each step, we can compare the heads of all lists and pick the smallest element to add to the result. This approach ensures that we always pick the smallest available element from all lists.

## Approach

1. Initialize a priority queue (`pq`) using a min-heap comparator to compare `ListNode` elements based on their values.
2. Iterate through the input array of linked lists (`lists`), adding non-null heads to the priority queue.
3. Initialize a dummy node (`dummy`) to hold the merged result.
4. Initialize a `current` pointer to keep track of the last node in the merged list.
5. While the priority queue is not empty:
   - Poll the smallest element (`smallest`) from the priority queue.
   - Append `smallest` to the `current` node.
   - Move `current` to the newly appended node.
   - If `smallest` has a non-null `next` pointer, add `smallest.next` to the priority queue.
6. Return `dummy.next`, which points to the head of the merged list.

## Complexity

- Time complexity: `O(n * log(k))`

  - Let `n` be the total number of nodes across all `k` lists.
  - The time complexity of adding all nodes to the priority queue is `O(n * log(k))`, where `k` is the number of lists.
  - Polling each node from the priority queue and adding its next node has a time complexity of `O(n * log(k))`.

- Space complexity: `O(k)`
  - The space complexity is `O(k)` for the priority queue, as it holds at most `k` elements.
  - Additionally, the space complexity for the dummy and current pointers is `O(1)`.

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
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        for (ListNode node : lists) {
            if (node != null) pq.add(node);
        }

        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;

        while (!pq.isEmpty()) {
            ListNode smallest = pq.poll();
            current.next = smallest;
            current = current.next;
            if (smallest.next != null) pq.add(smallest.next);
        }

        return dummy.next;
    }
}
```
