# 341. Flatten Nested List Iterator

## Description

Given a nested list of integers, this problem involves implementing an iterator to flatten it. The `NestedIterator` class should be able to initialize with a nested list, provide the next integer in the flattened list, and indicate whether there are more integers to retrieve.

## Function

```java
public class NestedIterator implements Iterator<Integer> {
    public NestedIterator(List<NestedInteger> nestedList) {}
    @Override
    public Integer next() {}
    @Override
    public boolean hasNext() {}
}
```

## Input Format

- A nested list of integers represented by `List<NestedInteger>`.

## Output Format

- Flattened list of integers.

## Constraints

- `1 <= nestedList.length <= 500`
- The values of the integers in the nested list are in the range `[-10^6, 10^6]`.

## Note

Your solution will be tested with the provided pseudocode to ensure the iterator functions correctly, and the flattened list matches the expected output.

```java
initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
```

## Example

```bash
# Sample Input
NestedIterator iterator = new NestedIterator(List.of(new NestedInteger(1, 1), new NestedInteger(2), new NestedInteger(1, 1)));

# Sample Output
[1, 1, 2, 1, 1]
```
