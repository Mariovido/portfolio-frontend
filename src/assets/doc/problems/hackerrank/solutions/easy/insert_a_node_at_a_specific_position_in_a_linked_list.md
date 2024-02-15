# Insert a node at a specific position in a linked list

## Intuition

The problem requires inserting a new node with given data at a specified position in a singly linked list. To do this, we need to traverse the linked list until we reach the node at the specified position, then insert the new node after the node at that position.

## Approach

1. Start by initializing a pointer `preNode` to the head of the linked list.
2. Traverse the linked list `position - 1` times to reach the node just before the desired position.
3. Create a new node with the given data.
4. Set the `next` pointer of the new node to the `next` pointer of the node at position `position`.
5. Set the `next` pointer of the node at position `position - 1` to the new node.
6. Return the head of the linked list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the linked list. This is because we may need to traverse the entire linked list to reach the desired position.

- Space complexity: `O(1)`, as we are only using a constant amount of extra space regardless of the size of the linked list.

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
    public static SinglyLinkedListNode insertNodeAtPosition(SinglyLinkedListNode llist, int data, int position) {
        SinglyLinkedListNode preNode = llist;

        for (int i = 0; i < position - 1; i++){
            preNode = preNode.next;
        }

        SinglyLinkedListNode node = new SinglyLinkedListNode(data);
        node.next = preNode.next;
        preNode.next = node;

        return llist;
    }
}
```
