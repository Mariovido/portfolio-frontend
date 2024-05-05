# Fraudulent Activity Notifications

## Description

In HackerLand National Bank's system, an alert for potential fraud is triggered if a client's daily expenditure on any given day is at least twice the median of expenditures for a defined number of trailing days. The system begins evaluating transactions only after accumulating enough expenditure data to match the trailing days' requirement.

## Function

```java
public static int activityNotifications(List<Integer> expenditure, int d) {}
```

## Input Format

- The first line contains two integers: `n` (number of days of transaction data) and `d` (number of trailing days for calculating the median) &rarr; `1 <= n <= 2 * 10^5`, `1 <= d <= n`.
- The second line contains `n` non-negative integers separated by spaces, each representing the daily expenditures &rarr; `0 <= expenditure[i] <= 200`

## Output Format

- Print a single integer representing the number of notifications sent to the client.

## Constraints

- `1 <= n <= 2 * 10^5`
- `1 <= d <= n`
- `0 <= expenditure[i] <= 200.`

## Example

```bash
# Sample Input
9 5
2 3 4 2 3 6 8 4 5

# Sample Output
2
```
