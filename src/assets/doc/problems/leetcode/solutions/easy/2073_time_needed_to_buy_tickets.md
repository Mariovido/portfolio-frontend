# 2073. Time Needed to Buy Tickets

## Intuition

Initially, the problem appears to involve simulating the process of buying tickets in a queue. Each person in the queue needs a certain number of tickets, and each turn allows them to buy one ticket if they need any. The goal is to calculate the total time required for a specific person (identified by index `k`) to buy all their tickets. The intuitive approach is to simulate the queue's progression, decrementing the ticket count for each person until the person at index `k` has bought all their tickets.

## Approach

1. Initialize a `time` variable to track the total time required.
2. Use a while loop to keep the process running until the person at index `k` buys all their tickets (i.e., `tickets[k]` becomes `0`).
3. Inside the while loop, iterate over the `tickets` array using a for loop.
   - For each person in the queue (each element in the array), if they still need to buy tickets (`tickets[i] > 0`), decrement their ticket count by `1` and increment the `time` counter by `1`.
   - If, after buying a ticket, the person at index `k` has finished buying their tickets (`tickets[k] == 0`), break out of the loop to stop the simulation.
4. Once the while loop ends (indicating that the person at index `k` has bought all their tickets), return the total `time` accumulated.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the number of people in the queue and `m` is the maximum number of tickets that a person wants to buy. This is because, in the worst case, we iterate over the entire queue to decrement each person's ticket count by one and might need to do so `m` times for the person with the maximum number of tickets.

- Space complexity: `O(1)`, since the solution only uses a fixed amount of extra space (for the `time` variable and loop indices), regardless of the input size.

## Code

```java
class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        int time = 0;

        while (tickets[k] != 0) {
            for (int i = 0; i < tickets.length; i++) {
                if (tickets[i] > 0) {
                    tickets[i]--;
                    time++;
                }

                if (tickets[k] == 0) break;
            }
        }

        return time;
    }
}
```
