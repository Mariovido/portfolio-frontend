# 381. Insert Delete GetRandom O(1) - Duplicates allowed

## Intuition

The problem involves maintaining a collection of elements that supports `insert`, `remove`, and `getRandom` operations. We need to handle duplicates efficiently while allowing random access. Using a combination of a list to store elements and a map to store the indices of each element provides a solution.

## Approach

1. Use a list (named `elements`) to store the actual elements in the order they are inserted.
2. Use a map (named `indexMap`) to store the indices of each element in the list. The map's values are sets containing the indices of occurrences of each element.
3. For `insert` operation:
   - If the element is not present in the map, add it with an empty set.
   - Add the index of the new element to the corresponding set in the map.
   - Return `true` if the size of the set becomes `1`, indicating the first occurrence of the element.
4. For `remove` operation:
   - If the element is not present in the map or the set is empty, return `false`.
   - Get the index of one occurrence of the element to be removed from the set in the map.
   - Swap the element at this index with the last element in the list.
   - Update the index of the last element in the set in the map.
   - Remove the last element from the list.
   - Return `true`.
5. For `getRandom` operation:
   - Generate a random index within the range of the current list size.
   - Return the element at this random index in the list.

## Complexity

- Time complexity:

  - `insert`: `O(1)` on average for adding an element to the list and updating the map.
  - `remove`: `O(1)` on average for removing an element from the list and updating the map.
  - `getRandom`: `O(1)` for retrieving a random element from the list.

- Space complexity: `O(n)`, where `n` is the number of elements in the collection, due to the storage of elements in the list and their indices in the map.

## Code

```java
class RandomizedCollection {
    private List<Integer> elements;
    private Map<Integer, Set<Integer>> indexMap;
    private Random random;

    public RandomizedCollection() {
        elements = new ArrayList<>();
        indexMap = new HashMap<>();
        random = new Random();
    }

    public boolean insert(int val) {
        if (!indexMap.containsKey(val)) indexMap.put(val, new HashSet<>());

        indexMap.get(val).add(elements.size());
        elements.add(val);

        return indexMap.get(val).size() == 1;
    }

    public boolean remove(int val) {
        if (!indexMap.containsKey(val) || indexMap.get(val).isEmpty()) return false;

        int removeIndex = indexMap.get(val).iterator().next();
        indexMap.get(val).remove(removeIndex);

        int lastElement = elements.get(elements.size() - 1);
        elements.set(removeIndex, lastElement);

        indexMap.get(lastElement).add(removeIndex);
        indexMap.get(lastElement).remove(elements.size() - 1);

        elements.remove(elements.size() - 1);

        return true;
    }

    public int getRandom() {
        int randomIndex = random.nextInt(elements.size());
        return elements.get(randomIndex);
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```
