# 381. Insert Delete GetRandom O(1) - Duplicates allowed

## Description

The `RandomizedCollection` is a data structure supporting the insertion, removal, and random element retrieval with linear probability based on the number of occurrences. Implement the `RandomizedCollection` class with average `O(1)` time complexity for each function.

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
- At most `2 * 10^5` calls in total will be made to `insert`, `remove`, and `getRandom`.
- There will be at least one element in the data structure when `getRandom` is called.

## Example

```bash
# Sample Input
RandomizedCollection randomizedCollection = new RandomizedCollection();
randomizedCollection.insert(1);
randomizedCollection.insert(1);
randomizedCollection.insert(2);
randomizedCollection.getRandom();
randomizedCollection.remove(1);
randomizedCollection.getRandom();

# Sample Output
[null, true, false, true, 2, true, 1]
```
