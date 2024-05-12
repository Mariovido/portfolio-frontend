# 2487. Remove Nodes From Linked List

## Intuition

The problem seems to be about filtering a singly-linked list based on some value criteria, where we remove all nodes that have smaller values compared to a node encountered later in the list. This suggests using a non-trivial strategy to access and compare nodes efficiently. A stack would be suitable for this purpose since it can help backtrack and remove nodes that should no longer be part of the list after encountering a larger node.

## Approach

1. **Initialize Pointers and Stack**: Start with a pointer to traverse the linked list (`cur`) and use a stack to keep track of nodes that might form the final list.
2. **First Pass - Build the Stack**:
   - Traverse the list from head to end using the `cur` pointer.
   - For each node, check the top of the stack. If the current node's value is greater than the value of the node at the top of the stack, pop the stack (this effectively removes the smaller elements that should no longer be in the list because a larger element has been found).
   - Push the current node onto the stack.
   - Move to the next node.
3. Second Pass - Rebuild the List: - Start with a `null` pointer (`nxt`) that will be used to rebuild the linked list in reverse (since the stack stores elements from the end to the start of the final list).
   Pop nodes from the stack, setting each node's `next` pointer to `nxt`. - Update `nxt` to the current node. - Continue until the stack is empty. - The last popped node from the stack is the new head of the filtered list.
4. Return Result: The node held by `cur` at the end of the stack processing is the new head of the linked list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. Each node is pushed and popped from the stack exactly once.

- Space complexity: `O(n)` in the worst case, as in scenarios where no nodes are removed (for instance, when all nodes are in increasing order), the entire list might be stored in the stack.

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
    public ListNode removeNodes(ListNode head) {
        ListNode cur = head;
        Deque<ListNode> stack = new ArrayDeque<>();

        while (cur != null) {
            while (!stack.isEmpty() && stack.peek().val < cur.val) {
                stack.pop();
            }

            stack.push(cur);
            cur = cur.next;
        }

        ListNode nxt = null;
        while (!stack.isEmpty()) {
            cur = stack.pop();
            cur.next = nxt;
            nxt = cur;
        }

        return cur;
    }
}
```
