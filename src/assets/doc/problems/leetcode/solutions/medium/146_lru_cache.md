# 146. LRU Cache

## Intuition

The code appears to implement an LRU (Least Recently Used) cache using a `LinkedHashMap`. The `LinkedHashMap` is used to maintain the order of the entries based on their access order, and the `removeEldestEntry` method is overridden to enforce the capacity limit and remove the least recently used entry when the size exceeds the specified capacity.

## Approach

- The `LRUCache` class extends `LinkedHashMap` with Integer keys and Integer values.
- The constructor initializes the LinkedHashMap with the given capacity, load factor (`0.75`), and access order set to `true`.
- The `get` method is used to retrieve the value associated with a given key. If the key is present, the method returns the corresponding value; otherwise, it returns `-1`.
- The `put` method is used to insert a key-value pair into the cache.
- The `removeEldestEntry` method is overridden to remove the eldest entry (the least recently used) when the size exceeds the specified capacity.

## Complexity

- Time complexity:

  - `get` operation: `O(1)`
  - `put` operation: `O(1)`
  - The time complexity is constant for both `get` and `put` operations due to the use of the underlying LinkedHashMap.

- Space complexity: `O(capacity)` since the LinkedHashMap is used to store key-value pairs, and the size is limited to the specified `capacity`.

## Code

```java
class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }

    public int get(int key) {
        return super.getOrDefault(key, - 1);
    }

    public void put(int key, int value) {
        super.put(key, value);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```
