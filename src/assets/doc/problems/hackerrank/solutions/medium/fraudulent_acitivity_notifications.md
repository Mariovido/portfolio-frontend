# Fraudulent Activity Notifications

## Intuition

The function `activityNotifications` aims to determine the number of notifications sent over a period of `d` days based on expenditure data. It uses a sliding window approach to maintain a count of expenditures within the window and calculates the median for each window. If the expenditure of the current day exceeds twice the median of the previous `d` days, a notification is sent.

## Approach

1. Initialize an array `count` to keep track of the count of each expenditure value within the window.
2. Iterate over the first `d` days and populate the `count` array accordingly.
3. Iterate over the remaining days. For each day:
   - Calculate the median using the `getMedian` function.
   - If the current expenditure exceeds twice the median, increment the `notifications` count.
   - Update the `count` array for the new day's expenditure and remove the oldest day's expenditure from the count.
4. Return the total count of notifications.

The `getMedian` function calculates the median based on the count array and the window size `d`. It handles both odd and even window sizes.

## Complexity

- Time complexity: `O(n)`

  - The initial counting of expenditures takes `O(d)` time.
  - Sliding the window and calculating the median requires iterating through the expenditure list once, which is `O(n)`.

- Space complexity: `O(1)` since the space usage does not scale with the size of the input list, except for the `count` array, which has a constant size of `201`.

## Code

```java
class Result {
    public static int activityNotifications(List<Integer> expenditure, int d) {
        int[] count = new int[201];

        for (int i = 0; i < d; i++) {
            count[expenditure.get(i)]++;
        }

        int notifications = 0;
        for (int i = d; i < expenditure.size(); i++) {
            double median = getMedian(count, d);

            if (expenditure.get(i) >= 2 * median) notifications++;

            count[expenditure.get(i)]++;
            count[expenditure.get(i - d)]--;
        }

        return notifications;
    }

    private static double getMedian(int[] count, int d) {
        int sum = 0;

        if (d % 2 == 1) {
            for (int i = 0; i < count.length; i++) {
                sum += count[i];

                if (sum > d / 2) return i;
            }
        } else {
            int first = -1;

            for (int i = 0; i < count.length; i++) {
                sum += count[i];

                if (sum == d / 2) first = i;
                else if (sum > d / 2) {
                    if (first == -1) return i;
                    else return (first + i) / 2.0;
                }
            }
        }

        return -1;
    }
}
```
