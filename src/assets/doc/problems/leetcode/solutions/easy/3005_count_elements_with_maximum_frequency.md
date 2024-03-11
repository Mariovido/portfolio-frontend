# 3005. Count Elements With Maximum Frequency

## Intuition

The code aims to find the maximum frequency of elements in the given array `nums`, along with the count of elements having that maximum frequency.

## Approach

1. Initialize a `HashMap` `freqs` to store the frequency of each element.
2. Initialize variables `maxFreq` and `numsMaxFreq` to keep track of the maximum frequency encountered and the count of elements with that frequency, respectively.
3. Iterate through each element in the `nums` array.
4. For each element, retrieve its frequency from the `freqs` map using `getOrDefault` method.
5. If the current frequency plus one is greater than the current `maxFreq`, update `maxFreq` and reset `numsMaxFreq` to `1`.
6. If the current frequency plus one equals the current `maxFreq`, increment `numsMaxFreq`.
7. Put the updated frequency of the current element back into the `freqs` map.
8. Finally, return the product of `maxFreq` and `numsMaxFreq`, which represents the maximum frequency of elements in the array.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of elements in the `nums` array. The code iterates through each element once.

- Space complexity: `O(n)`, where `n` is the number of elements in the `nums` array. The space is used to store the frequencies of each element in the `freqs` map.

## Code

```java
class Solution {
    public int maxFrequencyElements(int[] nums) {
        Map<Integer, Integer> freqs = new HashMap<>();

        int maxFreq = 0;
        int numsMaxFreq = 0;
        for (int num : nums) {
            int freq = freqs.getOrDefault(num, 0);

            if (maxFreq < freq + 1) {
                maxFreq = freq + 1;
                numsMaxFreq = 1;
            } else if (maxFreq == freq + 1) numsMaxFreq++;

            freqs.put(num, freq + 1);
        }

        return maxFreq * numsMaxFreq;
    }
}
```
