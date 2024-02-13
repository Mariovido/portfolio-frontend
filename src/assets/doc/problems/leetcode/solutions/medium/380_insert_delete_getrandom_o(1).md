# 380. Insert Delete GetRandom O(1)

## Intuition

The code implements a data structure named `RandomizedSet` that supports three operations: `insert`, `remove`, and `getRandom`. The primary goal is to allow constant time average complexity for each operation.

## Approach

- For the `insert` operation, it uses a HashSet to store unique values. The `add` method of the HashSet ensures that the insertion is performed in constant time on average.
- The `remove` operation also relies on the HashSet, utilizing the `remove` method, which has a constant time complexity on average.
- The `getRandom` operation retrieves a random element from the set. It converts the set to a list (`ArrayList`) and then uses the `nextInt` method of the `Random` class to generate a random index for the list.

## Complexity

- Time complexity:

  - `insert`: `O(1)` on average due to the HashSet.
  - `remove`: `O(1)` on average due to the HashSet.
  - `getRandom`: `O(1)` on average for generating a random index.

- Space complexity: `O(n)`, where `n` is the number of elements in the set. This is because a HashSet is used to store unique elements, and the `getRandom` method creates a temporary list with the same elements, resulting in additional space proportional to the number of elements in the set.

## Code

```java
class RandomizedSet {
    private Set<Integer> set;
    private Random random;

    public RandomizedSet() {
        set = new HashSet<>();
        random = new Random();
    }

    public boolean insert(int val) {
        return set.add(val);
    }

    public boolean remove(int val) {
        return set.remove(val);
    }

    public int getRandom() {
        List<Integer> tempList = new ArrayList<>(set);
        return tempList.get(random.nextInt(set.size()));
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```
