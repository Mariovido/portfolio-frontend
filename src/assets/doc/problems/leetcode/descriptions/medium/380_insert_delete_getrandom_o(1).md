# 380. Insert Delete GetRandom O(1)

## Description

This problem involves implementing a `RandomizedSet` class with three operations: `insert`, `remove`, and `getRandom`, each operating in average `O(1)` time complexity.

## Function

```java
class RandomizedSet {
    public RandomizedSet() {}
    public boolean insert(int val) {}
    public boolean remove(int val) {}
    public int getRandom() {}
}
```

## Input Format

- An array of strings representing operations on the `RandomizedSet` object.
- An array of arrays representing arguments for each operation.

## Output Format

- An array of results corresponding to the outcomes of the operations.

## Constraints

- `-2^31 <= val <= 2^31 - 1`
- At most `2 * 10^5` calls will be made to `insert`, `remove`, and `getRandom`.
- There will be at least one element in the data structure when `getRandom` is called.

## Example

```bash
# Sample Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]

# Sample Output
[null, true, false, true, 2, true, false, 2]
```
