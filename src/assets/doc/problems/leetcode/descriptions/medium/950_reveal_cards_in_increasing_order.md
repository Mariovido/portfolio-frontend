# 950. Reveal Cards In Increasing Order

## Description

Given an integer array `deck`, representing unique integers on cards, devise a sequence to reveal cards in increasing order. Initially, all cards are face down. Reveal the top card, then put the next top card at the bottom of the deck, repeating the process until all cards are revealed.

## Function

```java
public int[] deckRevealedIncreasing(int[] deck) {}
```

## Input Format

- An integer array `deck`, with `1 <= deck.length <= 1000` and `1 <= deck[i] <= 10^6`.

## Output Format

- An integer array representing the order to reveal cards in increasing order.

## Constraints

- `1 <= deck.length <= 1000`
- `1 <= deck[i] <= 10^6`
- All elements in deck are unique.

## Example

```bash
# Sample Input
int[] deck = {17,13,11,2,3,5,7};

# Sample Output
[2,13,3,11,5,17,7]
```
