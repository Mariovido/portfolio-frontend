# Tree: Huffman Decoding

## Description

Given a Huffman tree with variable length codewords assigned to fixed length input characters, this problem involves decoding a Huffman-encoded string. Huffman coding assigns shorter codewords to more frequent characters, making it a prefix-free encoding technique. The goal is to follow the encoded string through the Huffman tree and return the decoded string.

## Function

```java
void decode(String s, Node root) {}
```

## Input Format

- A reference to the root node of the Huffman tree (`root`).
- A Huffman encoded string (`s`).

## Output Format

- The decoded string.

## Constraints

- `1 <= |s| <= 25`

## Example

```bash
# Sample Input
1001011

# Sample Output
ABACA
```
