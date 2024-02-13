# 341. Flatten Nested List Iterator

## Intuition

The problem requires flattening a nested list and implementing an iterator for the flattened list. To achieve this, we can use recursion to traverse the nested structure and add the integers to a flattened list. The iterator can then iterate over this flattened list.

## Approach

We can use a recursive approach to traverse the nested structure. The `flattenList` method is recursively called for each element in the nested list. If the current element is an integer, it is added to the `flattenedList`. If the element is a nested list, the method is called recursively on that nested list.

The `NestedIterator` constructor initializes the `flattenedList` by calling the `flattenList` method. The iterator is then created using the `flattenedList` for easy iteration in the `next` and `hasNext` methods.

## Complexity

- Time complexity: `O(N)`, where `N` is the total number of integers in the nested structure. We visit each integer once during the flattening process.

- Space complexity: `O(N)`, where `N` is the total number of integers in the nested structure. The flattened list stores all integers, and the recursion stack also contributes to the space complexity during the flattening process.

## Code

```java
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
public class NestedIterator implements Iterator<Integer> {
    private List<Integer> flattenedList;
    private Iterator<Integer> iterator;

    public NestedIterator(List<NestedInteger> nestedList) {
        flattenedList = new ArrayList<>();
        flattenList(nestedList);
        iterator = flattenedList.iterator();
    }

    @Override
    public Integer next() {
        return iterator.next();
    }

    @Override
    public boolean hasNext() {
        return iterator.hasNext();
    }

    private void flattenList(List<NestedInteger> nestedList) {
        for (NestedInteger ni: nestedList) {
            if (ni.isInteger()) flattenedList.add(ni.getInteger());
            else flattenList(ni.getList());
        }
    }
}

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i = new NestedIterator(nestedList);
 * while (i.hasNext()) v[f()] = i.next();
 */
```
