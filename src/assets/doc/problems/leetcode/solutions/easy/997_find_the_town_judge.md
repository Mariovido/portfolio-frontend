# 997. Find the Town Judge

## Intuition

The algorithm iterates through each trust relationship and updates the trust counts for each person. If a person trusts someone else, their trust count decreases, and if they are trusted by someone else, their trust count increases. Then, it checks for the person who is trusted by everyone else except themselves, as they would be the potential judge.

## Approach

1. Initialize an array `trustCounts` of size `n + 1` to store the trust counts for each person.
2. Iterate through each trust relationship in the `trust` array.
   - Decrement the trust count for the person who trusts (`relation[0]`).
   - Increment the trust count for the person who is trusted (`relation[1]`).
3. Iterate through the trust counts array from index `1` to `n`.
   - If the trust count at index `i` is equal to `n - 1`, return `i` as the judge.
4. If no judge is found, return `-1`.

## Complexity

- Time complexity: `O(E + V)`

  - The algorithm iterates through the trust relationships once, which takes `O(E)` time, where `E` is the number of trust relationships.
  - The second loop iterates through the trustCounts array once, which takes `O(V)` time, where `V` is the number of people (`n`).

- Space complexity: `O(n)` as we are using an additional array of size `n + 1` to store the trust counts.

## Code

```java
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] trustCounts = new int[n + 1];

        for (int[] relation : trust) {
            trustCounts[relation[0]]--;
            trustCounts[relation[1]]++;
        }

        for (int i = 1; i <= n; i++) {
            if (trustCounts[i] == n - 1) return i;
        }

        return -1;
    }
}
```
