# Dynamic Array

## Intuition

The problem seems to involve processing a sequence of queries on a dynamic array structure. Each query can either append an element to one of the arrays or retrieve an element from a specific array based on some conditions. Since we're dealing with dynamic arrays, we need to efficiently handle the resizing and indexing of these arrays.

## Approach

1. Initialize an `ArrayList` of `ArrayLists` (`arr`) to represent the dynamic arrays.
2. Iterate through the `queries`:
   - For each `query`:
     - Extract the query type, `x`, and `y` values.
     - Calculate the index (`idx`) of the dynamic array based on `x` and the last answer.
     - If the query type is `1`, append the value `y` to the dynamic array at index `idx`.
     - If the query type is `2`, calculate the mod of `y` with the size of the dynamic array at index `idx`, then retrieve the element at that position from the dynamic array. Update `lastAnswer` with this value and add it to the `answers` list.
3. Return the list of `answers`.

## Complexity

- Time complexity: `O(Q)`, where `Q` is the number of queries.

- Space complexity: `O(n + Q)`, where `n` is the size of the dynamic array (which is the same as the number of initial arrays created) and `Q` is the number of queries. This is because we are storing the dynamic arrays and the list of answers.

## Code

```java
class Result {
    public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {
        List<List<Integer>> arr = new ArrayList<>();
        for (int i = 0; i < n; i++){
            arr.add(new ArrayList<Integer>());
        }
        int lastAnswer = 0;

        List<Integer> answers = new ArrayList<>();
        for (int i = 0; i < queries.size(); i++) {
            int query = queries.get(i).get(0);
            int x = queries.get(i).get(1);
            int y = queries.get(i).get(2);

            int idx = (x ^ lastAnswer) % n;
            if (query == 1) arr.get(idx).add(y);
            else if (query == 2) {
                int mod = y % arr.get(idx).size();
                lastAnswer = arr.get(idx).get(mod);
                answers.add(lastAnswer);
            }
        }

        return answers;
    }
}
```
