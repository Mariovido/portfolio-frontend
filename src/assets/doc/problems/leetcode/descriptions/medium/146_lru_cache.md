# 146. LRU Cache

## Description

Design a data structure, `LRUCache`, that adheres to the constraints of a Least Recently Used (LRU) cache. It should have the following functionalities:

- `LRUCache(int capacity)`: Initialize the LRU cache with a positive size `capacity`.
- `int get(int key)`: Return the value of the key if it exists; otherwise, return `-1`.
- `void put(int key, int value)`: Update the value of the key if it exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

## Function

```java
class LRUCache {
    public LRUCache(int capacity) {}
    public int get(int key) {}
    public void put(int key, int value) {}
}
```

## Input Format

- The input consists of a sequence of operations.
- Each operation is represented as either `LRUCache(capacity)` or `get(key)` or `put(key, value)`.

## Output Format

- The output is an array representing the result of each `get` operation.
- If the operation is a `get`, the result should be the value of the key if it exists; otherwise, `-1`.
- If the operation is a `put`, the result should be `null`.

## Constraints

- `1 <= capacity <= 3000`
- `0 <= key <= 10^4`
- `0 <= value <= 10^5`
- At most `2 * 10^5` calls will be made to `get` and `put`.

## Example

```bash
# Sample Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

# Sample Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
```
