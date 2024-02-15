# Tree: Huffman Decoding

## Intuition

The decode function aims to decode a given binary string `s` using a given binary tree `root`. It traverses the binary tree based on the characters in the input string, appending decoded characters to a `StringBuilder` when it reaches a leaf node.

## Approach

1. Initialize a `StringBuilder` to store the decoded characters.
2. Start traversing the binary tree from the `root` node.
3. Iterate through each character in the input string.
4. If the character is `0`, move to the left child of the current node; if `1`, move to the right child.
5. Check if the current node is a leaf node (both left and right children are `null`).
6. If it is a leaf node, append the character of the current node to the `StringBuilder` and reset the current node to the `root`.
7. Repeat steps `4-6` until all characters in the input string are processed.
8. Print the decoded string stored in the `StringBuilder`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input string `s`. The algorithm traverses each character in the input string and performs constant-time operations for each character.

- Space complexity: `O(1)`, excluding the space required for the output string. The algorithm uses a StringBuilder of constant size to store the decoded string, regardless of the input size.

## Code

```java
class Result {
    /*
      class Node
        public  int frequency; // the frequency of this tree
          public  char data;
          public  Node left, right;
    */
    void decode(String s, Node root) {
        StringBuilder sb = new StringBuilder();
        Node node = root;
        for(char c : s.toCharArray()) {
            if (c == '0') node = node.left;
            else node = node.right;

            if(node.left == null && node.right == null) {
                sb.append(node.data);
                node = root;
            }
        }
        System.out.println(sb.toString());
    }
}
```
