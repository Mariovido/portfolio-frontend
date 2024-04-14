# 2073. Time Needed to Buy Tickets

## Description

In this scenario, we have `n` individuals lined up to purchase tickets, with the `i^{th}` person intending to buy `tickets[i]` tickets. Each person can buy only one ticket at a time and must rejoin the end of the queue to buy more until they've purchased their desired amount. The task is to calculate how long it takes for the person at position `k` to buy all their tickets.

## Function

```java
public int timeRequiredToBuy(int[] tickets, int k) {}
```

## Input Format

- A `0`-indexed integer array `tickets` of length `n`, where `tickets[i]` is the number of tickets the `i^{th}` person wants to buy.
- An integer `k`, indicating the position of the person of interest in the queue.

## Output Format

- Return the time it takes for the person at position `k` to finish buying their tickets.

## Constraints

- `1 <= n <= 100`
- `1 <= tickets[i] <= 100`
- `0 <= k < n`

## Example

```bash
# Sample Input
tickets = [2,3,2], k = 2

# Sample Output
6
```
