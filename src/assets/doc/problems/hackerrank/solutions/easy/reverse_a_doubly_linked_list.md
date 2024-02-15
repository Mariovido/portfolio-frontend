# Reverse a doubly linked list

## Intuition

The intuition behind reversing a doubly linked list is to iterate through the list while updating the pointers to reverse the direction of the links. By swapping the `next` and `prev` pointers of each node, the list can be reversed.

## Approach

The approach involves using three pointers: `prevNode`, `currentNode`, and `nextNode`. We start with `prevNode` as `null` and `currentNode` as the head of the list. While traversing the list, we update the pointers in the following manner:

1. Store the next node of the current node (`nextNode`) to avoid losing the reference.
2. Update the next pointer of the current node to point to the previous node (`prevNode`).
3. Update the prev pointer of the current node to point to the next node (`nextNode`).
4. Move `prevNode` to the current node and `currentNode` to the next node.

Repeat these steps until `currentNode` becomes null, which indicates that the entire list has been reversed. Finally, return the new head of the reversed list, which is the last node of the original list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the doubly linked list. This is because we traverse the entire list once to reverse it.

- Space complexity: `O(1)` because we are using a constant amount of extra space regardless of the size of the input list. We only use a few extra pointers (`prevNode`, `currentNode`, `nextNode`) to perform the reversal in place.

## Code

```java
class Result {
    /*
     * For your reference:
     *
     * DoublyLinkedListNode {
     *     int data;
     *     DoublyLinkedListNode next;
     *     DoublyLinkedListNode prev;
     * }
     *
     */
    public static DoublyLinkedListNode reverse(DoublyLinkedListNode llist) {
        DoublyLinkedListNode prevNode = null;
        DoublyLinkedListNode currentNode = llist;

        while (currentNode != null) {
            DoublyLinkedListNode nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return prevNode;
    }
}
```
