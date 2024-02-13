# 451. Sort Characters By Frequency

## Intuition

The problem requires sorting characters in a string based on their frequency. One approach is to count the frequency of each character and then sort them based on their frequencies in descending order.

## Approach

1. Create a hashmap to store the frequency of each character in the input string.
2. Iterate through the input string and update the frequency of each character in the hashmap.
3. Create a priority queue (min-heap) and add all entries from the hashmap into the priority queue. We'll use a custom comparator to prioritize entries based on their frequencies.
4. Poll entries from the priority queue one by one and append characters to the result string according to their frequencies.
5. Return the result string.

## Complexity

- Time complexity: Overall time complexity is `O(n * log(n))`.

  - Counting the frequency of characters takes `O(n)`, where `n` is the length of the input string.
  - Adding entries to the priority queue takes `O(n * log(n))` time, where `n` is the number of unique characters in the input string.
  - Polling entries from the priority queue and appending characters to the result string also takes `O(n * log(n))` time.

- Space complexity: Overall space complexity is `O(n)`.
  - Space complexity is dominated by the hashmap and the priority queue.
  - The hashmap stores the frequency of each character, requiring `O(n)` space.
  - The priority queue also requires `O(n)` space to store all unique characters.
  - Additionally, the result string requires `O(n)` space.

## Code

```java
class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> freq = new HashMap<>();

        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>(
            (a, b) -> b.getValue() - a.getValue()
        );

        pq.addAll(freq.entrySet());

        StringBuilder result = new StringBuilder();
        while (!pq.isEmpty()) {
            Map.Entry<Character, Integer> entry = pq.poll();
            result.append(String.valueOf(entry.getKey()).repeat(entry.getValue()));
        }

        return result.toString();
    }
}
```
