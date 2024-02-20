# 937. Reorder Data in Log Files

## Intuition

The problem requires reordering log files based on certain criteria. The logs are composed of alphanumeric identifiers followed by words. We need to reorder them such that:

- Letter-logs come before digit-logs.
- Letter-logs are ordered lexicographically ignoring the identifier if the content is tied.
- Digit-logs should remain in the same order they were in the input.

## Approach

1. We utilize the `Arrays.sort()` method to sort the `logs` array.
2. We provide a custom comparator to the sorting function.
3. Within the comparator:
   - We split each log into two parts: identifier and content.
   - We determine if the log is a digit-log or a letter-log by checking the first character of the content.
   - If both logs are letter-logs, we compare their contents. If the contents are the same, we compare their identifiers.
   - If one of the logs is a digit-log, we prioritize the letter-log.
4. After sorting, the array is returned.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the number of logs. However, in this case, the sorting is based on a custom comparator, so the exact time complexity may vary depending on the implementation of the sorting algorithm.

- Space complexity: `O(n)`, where `n` is the number of logs, as we are using additional space to split the logs and store their components temporarily.

## Code

```java
class Solution {
    public String[] reorderLogFiles(String[] logs) {
        Arrays.sort(logs, (log1, log2) -> {
            String[] split1 = log1.split(" ", 2);
            String[] split2 = log2.split(" ", 2);
            boolean isDigit1 = Character.isDigit(split1[1].charAt(0));
            boolean isDigit2 = Character.isDigit(split2[1].charAt(0));

            if (!isDigit1 && !isDigit2) {
                int cmp = split1[1].compareTo(split2[1]);
                if (cmp != 0) return cmp;
                return split1[0].compareTo(split2[0]);
            }

            return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
        });

        return logs;
    }
}
```
