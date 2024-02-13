# 127. Word Ladder

## Intuition

The problem seems to involve finding the shortest transformation sequence from `beginWord` to `endWord` using words from the given word list. The code employs a breadth-first search strategy to explore possible transformations.

## Approach

The approach is a breadth-first search. The code uses a queue to explore possible transformations of the current word, starting from `beginWord`. It iterates through each character of the current word and generates all possible one-character transformations. For each transformation, it checks if it is present in the word set. If yes, it adds it to the queue for further exploration and removes it from the word set to avoid redundancy. The process continues until either the queue is empty or the `endWord` is found.

## Complexity

- Time complexity:

  - Let `n` be the total number of words in the word list and `m` be the length of each word. In the worst case, every word needs to be checked for transformations, and for each word, all possible transformations are considered. Therefore, the time complexity is `O(n * m * 26)`, where `26` is the number of characters in the English alphabet.

- Space complexity:
  - The space complexity is `O(n)`, where `n` is the number of words in the word list. This is because the `wordSet` and the `queue` are the primary data structures used, and both are directly proportional to the number of words.

## Code

```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);

        Integer transformations = 0;
        while (!queue.isEmpty()) {
            Integer size = queue.size();

            for (int i = 0; i < size; i++) {
                String currentWord = queue.poll();

                if (currentWord.equals(endWord)) return transformations + 1;

                for (int j = 0; j < currentWord.length(); j++) {
                    char[] charArray = currentWord.toCharArray();

                    for (char c = 'a'; c <= 'z'; c++) {
                        charArray[j] = c;
                        String transformedWord = new String(charArray);

                        if (wordSet.contains(transformedWord)) {
                            queue.offer(transformedWord);
                            wordSet.remove(transformedWord);
                        }
                    }
                }
            }

            transformations++;
        }

        return 0;
    }
}
```
