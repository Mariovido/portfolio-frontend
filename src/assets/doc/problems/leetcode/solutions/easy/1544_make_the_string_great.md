# 1544. Make The String Great

## Intuition

Initially, observing the problem, it seems like we need to find and remove pairs of characters where one is the uppercase version of the other, adjacent in the string. This task hints at a need for a methodical approach to iteratively remove such pairs until no more can be found, suggesting the usage of a dynamic data structure that allows for efficient modification like `StringBuilder`.

## Approach

1. Initialize a `StringBuilder` with the input string `s`. This is because `StringBuilder` allows us to easily modify the string (such as deleting characters) without the overhead of creating a new string every time a modification is made.
2. Set a flag variable `found` to true to enter the while loop.
3. Use a while loop to keep iterating over the `StringBuilder` as long as we keep finding pairs of characters to remove. The loop continues until no such pair is found in a complete iteration, indicated by the `found` flag being set to false.
4. Within the while loop, iterate through the characters of the `StringBuilder` using a for loop.
5. For each character, check if it forms a pair with its immediate neighbor where one is the uppercase version of the other. This is done by checking if the absolute difference of their ASCII values is `32` (since the difference between uppercase and lowercase letters in ASCII is `32`).
6. If such a pair is found, delete both characters from the `StringBuilder` and break the loop to start over, since the structure of the string has changed.
7. After no more pairs can be found and the while loop exits, convert the `StringBuilder` back to a String and return it.

## Complexity

- Time complexity: `O(n^2)`

  - In the worst case, every deletion (which takes `O(1)` time) could lead to re-checking the entire string, and since each check could potentially lead to a deletion, we might end up checking from the start many times. Given `n` characters, in the worst case, this process is `(O(n * n)`.

- Space complexity: `O(n)`
  - The extra space used by our algorithm is the space for the `StringBuilder`, which at most will contain all the characters of the input string `s`, hence `O(n)`.

## Code

```java
class Solution {
    public String makeGood(String s) {
        StringBuilder sb = new StringBuilder(s);

        boolean found = true;
        while (found) {
            found = false;

            for (int i = 0; i < sb.length() - 1; i++) {
                if (Math.abs(sb.charAt(i) - sb.charAt(i + 1)) == 32) {
                    sb.delete(i, i + 2);
                    found = true;
                    break;
                }
            }
        }

        return sb.toString();
    }
}
```
