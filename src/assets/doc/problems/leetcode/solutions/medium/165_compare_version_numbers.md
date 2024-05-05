# 165. Compare Version Numbers

## Intuition

The problem seems to involve comparing two version numbers represented as strings. The versions are split into components separated by dots, and then each component is compared numerically.

## Approach

1. Split the input version strings `version1` and `version2` into arrays of integers using the dot (`.`) as a delimiter.
2. Determine the length of the longer version array.
3. Iterate over each component of the version arrays simultaneously.
4. Convert each component to an integer for numerical comparison.
5. Compare corresponding components of both versions. If one component is greater than the other, return `1` or `-1` accordingly.
6. If all components are equal, return `0`.

## Complexity

- Time complexity: `O(n)`, where `n` is the maximum number of parts between the two versions. We iterate through all parts of both versions once.

- Space complexity: `O(n)`, where `n` is the maximum number of parts between the two versions. We store the split version parts in arrays.

## Code

```java
class Solution {
    public int compareVersion(String version1, String version2) {
        String[] v1 = version1.split("\\.");
        String[] v2 = version2.split("\\.");

        int length = Math.max(v1.length, v2.length);
        for (int i = 0; i < length; i++) {
            int num1 = (i < v1.length) ? Integer.parseInt(v1[i]) : 0;
            int num2 = (i < v2.length) ? Integer.parseInt(v2[i]) : 0;

            if (num1 < num2) return -1;
            else if (num1 > num2) return 1;
        }

        return 0;
    }
}
```
