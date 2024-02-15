# Reverse a linked list

## Intuition

The problem involves reversing a singly linked list. The intuitive approach would be to traverse the list iteratively while keeping track of the previous node, current node, and next node. During each iteration, we'll reverse the link direction from current node to the previous node.

## Approach

We initialize two pointers, `prevNode` and `currentNode`, where `prevNode` initially points to `null` and `currentNode` points to the head of the linked list. We iterate through the list, updating the pointers accordingly:

1. Store the next node of `currentNode`.
2. Reverse the link direction of `currentNode` to point to `prevNode`.
3. Update `prevNode` to be `currentNode`.
4. Move `currentNode` to the next node (the one stored in step `1`).
5. Repeat steps `1-4` until we reach the end of the list.

Finally, we return `prevNode`, which now points to the new head of the reversed linked list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. We traverse the entire list once.

- Space complexity: `O(1)`, since we only use a constant amount of extra space for storing pointers regardless of the size of the input linked list.

## Code

```java
class Result {
    /*
     * For your reference:
     *
     * SinglyLinkedListNode {
     *     int data;
     *     SinglyLinkedListNode next;
     * }
     *
     */
    public static SinglyLinkedListNode reverse(SinglyLinkedListNode llist) {
        SinglyLinkedListNode prevNode = null;
        SinglyLinkedListNode currentNode = llist;

        while (currentNode != null) {
            SinglyLinkedListNode nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return prevNode;
    }
}
```
