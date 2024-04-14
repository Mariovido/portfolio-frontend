# 950. Reveal Cards In Increasing Order

## Intuition

Initially, the problem presents itself as a puzzle where we need to reverse-engineer the process of revealing cards in increasing order and then placing the next card at the bottom of the deck. The challenge lies in figuring out how to reconstruct the original deck arrangement that allows this process to unfold correctly. My first thought is that sorting the deck in ascending order will be crucial since we want to reveal cards in increasing order. The main puzzle then is to determine in what order to place these sorted cards back into the deck to achieve the desired reveal process.

## Approach

1. **Sort the Deck**: Since we want to reveal cards in increasing order, the first step is to sort the given `deck` array.
2. **Queue for Index Tracking**: Initialize a queue (or deque) to keep track of the indices in the answer array where the next card should be placed. Initially, this queue will contain all indices of the answer array in order.
3. **Distribute the Cards**:
   - Iterate over the sorted deck. For each card, remove the front index from the queue (this represents the position in the answer array where the current card will be revealed from).
   - Place the current card in the `answer` array at the removed index.
   - Then, to simulate placing the next card at the bottom of the deck, remove the next index from the front of the queue and add it to the back of the queue. This step is skipped if the queue is empty, which happens for the last card.
4. **Return the Reconstructed Deck**: Once all cards have been placed, return the `answer` array.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the deck takes `O(n * log(n))` time.
  - The subsequent operations, including iterating over the deck and managing the queue, take `O(n)` time. Since sorting dominates the time complexity, the overall time complexity is `O(n * log(n))`.

- Space complexity: `O(n)`
  - The space complexity is primarily determined by the `answer` array and the queue used to track indices, both of which require `O(n)` space. Thus, the total space complexity is `O(n)`.

## Code

```java
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck);

        int n = deck.length;
        int[] answer = new int[n];
        Deque<Integer> indexQueue = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            indexQueue.add(i);
        }

        for (int card : deck) {
            answer[indexQueue.poll()] = card;

            if (!indexQueue.isEmpty()) indexQueue.add(indexQueue.poll());
        }

        return answer;
    }
}
```
