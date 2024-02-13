# 232. Implement Queue using Stacks

## Description

Implement a first in first out (`FIFO`) queue using only two stacks. The implemented queue should support standard queue operations: `push`, `peek`, `pop`, and `empty`.

- `push(int x)`: Pushes element `x` to the back of the queue.
- `pop()`: Removes the element from the front of the queue and returns it.
- `peek()`: Returns the element at the front of the queue.
- `empty()`: Returns true if the queue is empty, false otherwise.

## Function

```java
class MyQueue {
    public MyQueue() {}
    public void push(int x) {}
    public int pop() {}
    public int peek() {}
    public boolean empty() {}
}
```

## Input Format

- For each operation, there is an array representing the sequence of operations and their parameters.
- The first element of the array is the class instantiation (`MyQueue`).
- The subsequent elements represent operations (`push`, `pop`, `peek`, `empty`) and their corresponding parameters.

## Output Format

- An array containing the output for each operation.
- `null` is used for constructor initialization.
- For operations with a return value (`pop`, `peek`, `empty`), the corresponding return value is included in the output array.

## Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All calls to `pop` and `peek` are valid.

## Follow-up

- Can you implement the queue such that each operation is amortized `O(1)` time complexity? In other words, performing n operations will take overall `O(n)` time even if one of those operations may take longer.

## Example

```bash
# Sample Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

# Sample Output
[null, null, null, 1, 1, false]
```
