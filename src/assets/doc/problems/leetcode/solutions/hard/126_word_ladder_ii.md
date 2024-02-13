# 126. Word Ladder II

## Intuition

The problem seems to involve finding the shortest transformation sequence from the `beginWord` to the `endWord`, where each word in the sequence must differ by only one character. We can use a breadth-first search (BFS) approach to find the shortest path. After finding the shortest path, we can use depth-first search (DFS) to backtrack and find all possible paths.

## Approach

1. Start by initializing a HashMap to store each word along with its corresponding shortest steps to reach from `beginWord`.
2. Initialize a queue for BFS traversal and add the `beginWord` along with its step count.
3. Keep track of visited words using a HashSet to avoid revisiting them.
4. Perform BFS until the queue is empty or until the `endWord` is found.
5. Once the `endWord` is found, perform DFS to backtrack from `endWord` to `beginWord` and find all possible paths.
6. During DFS, recursively explore all words that are one step closer to `beginWord` and add them to the current path.
7. Finally, return the list of all possible transformation sequences.

## Complexity

- Time complexity: Overall time complexity would be dominated by the BFS traversal.

  - BFS: `O(N * M)`, where `N` is the number of words in the `wordList` and `M` is the length of each word. In the worst case, we might need to explore all words to find the shortest path.
  - DFS: `O(N * M * K)`, where `K` is the average number of neighbors for each word. In the worst case, we might need to explore all neighbors for each word in the path.

- Space complexity: Overall space complexity is ` \large O(N)`.
  - HashMap: `O(N)`, where `N` is the number of words in the `wordList`.
  - Queue: `O(N)`, where `N` is the number of words in the `wordList`.
  - HashSet: `O(N)`, where `N` is the number of words in the `wordList`.
  - Recursive stack space for DFS: `O(N)`, where `N` is the maximum depth of the recursion stack.

## Code

```java
class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        HashMap<String, Integer> hm = new HashMap<>();

        Queue<Pair> q = new ArrayDeque<>();
        q.add(new Pair(beginWord, 1));

        HashSet<String> visited = new HashSet<>();
        visited.add(beginWord);

        while (!q.isEmpty()) {
            Pair rem = q.remove();
            String word = rem.word;
            int steps = rem.steps;
            hm.put(word, steps);

            if (endWord.equals(word)) break;

            for (String trav : wordList) {
                if (!visited.contains(trav) && isDiffOne(word, trav)) {
                    visited.add(trav);
                    q.add(new Pair(trav, steps + 1));
                }
            }
        }

        List<String> arl = new ArrayList<>();
        List<List<String>> ans = new ArrayList<>();

        if (!hm.containsKey(endWord)) return ans;

        dfs(endWord, beginWord, wordList, hm, arl, ans);

        return ans;
    }

    public void dfs(String end, String begin, List<String> wordList, HashMap<String, Integer> hm, List<String> arl, List<List<String>> ans) {
        if (end.equals(begin)) {
            arl.add(0, begin);
            List<String> temp = new ArrayList<>(arl);
            ans.add(temp);
            arl.remove(0);
            return;
        }

        arl.add(0, end);
        for (String trav : hm.keySet()) {
            if (hm.get(trav) < hm.get(end) && isDiffOne(end, trav)) dfs(trav, begin, wordList, hm, arl, ans);
        }
        arl.remove(0);
    }

    public boolean isDiffOne(String s1, String s2) {
        if (s1.equals(s2)) return false;

        int count = 0;
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) count++;
            if (count >= 2) return false;
        }

        return count == 1;
    }

    class Pair {
        String word;
        int steps;

        Pair(String word, int steps) {
            this.word = word;
            this.steps = steps;
        }
    }
}
```
