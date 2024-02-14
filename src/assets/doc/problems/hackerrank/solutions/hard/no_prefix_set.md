# No Prefix Set

## Intuition

The problem requires determining whether there exists a prefix of one string that is also a prefix of another string in the given list of words. We can solve this problem efficiently using a trie data structure.

## Approach

1. Implement a `Trie` data structure where each node contains an array of pointers to child nodes representing each character of the alphabet. Additionally, each node has a boolean flag indicating whether it marks the end of a word.
2. Iterate through each `word` in the list.
3. For each `word`, traverse the `trie` starting from the root.
4. At each character of the `word`, check if there is a corresponding child node in the `trie`.
5. If there is no child node for the current character, create one.
6. If there is already a child node for the current character, check if it marks the end of a `word` (i.e., it has already been inserted as a prefix of another word). If it does, return `BAD SET` along with the current `word`.
7. If the traversal reaches the end of the `word` without encountering any conflicts, mark the last node as the end of a `word`.
8. If all `words` are processed without any conflicts, return `GOOD SET`.

## Complexity

- Time complexity: `O(n * m)`

  - Insertion of each word into the trie takes `O(m)` time, where `m` is the length of the word.
  - Since there are `n` words in the input list, the total time complexity is `O(n * m)`.

- Space complexity: `O(ALPHABET_SIZE * m * n)`, where `ALPHABET_SIZE` is the size of the alphabet and `m` is the average length of the words.

## Code

```java
class Result {
    static Trie trie = new Trie();

    public static void noPrefix(List<String> words) {
        for (String word : words) {
            if (trie.insert(word)) {
                System.out.println("BAD SET");
                System.out.println(word);
                return;
            }
        }

        System.out.println("GOOD SET");
    }

    static class Trie {
        int LEN = 'j' - 'a' + 1;
        Node root = new Node();

        class Node {
            Node[] children;
            boolean wordleaf;

            Node() {
                children = new Node[LEN];
                wordleaf = false;
            }
        }

        boolean insert(String str) {
            return insert(str, root);
        }

        boolean insert(String str, Node node) {
            if (str == null || str.length() < 1) return false;

            char c = str.charAt(0);
            Node child = node.children[c - 'a'];

            if (child == null) {
                child = new Node();
                node.children[c - 'a'] = child;
            } else if (child.wordleaf || str.length() == 1) return true;

            if (str.length() == 1) {
                child.wordleaf = true;
                return false;
            }

            return insert(str.substring(1), child);
        }
    }
}
```
