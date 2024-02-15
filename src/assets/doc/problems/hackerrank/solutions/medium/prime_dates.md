# Prime Dates

## Intuition

The code seems to be aimed at finding prime dates within a given range. Prime dates are defined as dates where the concatenated form of day, month, and year is divisible by either `4` or `7`. The code updates the number of days in February depending on whether the year is a leap year or not, and then iterates through each day within the given range, checking for prime dates.

## Approach

1. First, the code initializes the number of days in each month in a non-leap year.
2. It then iterates through each day within the given date range.
3. For each day, it checks if the concatenated form of day, month, and year is divisible by `4` or `7`.
4. If the conditions are met, it increments the count of prime dates.
5. The loop continues until it reaches the end date.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of days between the start and end dates. The code iterates through each day within the given range.

- Space complexity: `O(1)`. The space used is constant, as there are no data structures being used that scale with the input size.

## Code

```java
class Result {
    public static void updateLeapYear(int year) {
        if(year % 400 == 0) {
            month[2] = 29;
        } else if(year % 100 == 0) {
            month[2] = 28;
        } else if(year % 4 == 0) {
            month[2] = 29;
        } else {
            month[2] = 28;
        }
    }

    public static void storeMonth() {
        month[1] = 31;
        month[2] = 28;
        month[3] = 31;
        month[4] = 30;
        month[5] = 31;
        month[6] = 30;
        month[7] = 31;
        month[8] = 31;
        month[9] = 30;
        month[10] = 31;
        month[11] = 30;
        month[12] = 31;
    }

    public static int findPrimeDates(int d1, int m1, int y1, int d2, int m2, int y2) {
        storeMonth();

        int result = 0;

        while(true) {
            int x = d1;
            x = x * 100 + m1;
            x = x * 10000 + y1;
            if(x % 4 == 0 || x % 7 == 0) {
                result = result + 1;
            }
            if(d1 == d2 && m1 == m2 && y1 == y2) {
                break;
            }
            updateLeapYear(y1);
            d1 = d1 + 1;
            if(d1 > month[m1]) {
                m1 = m1 + 1;
                d1 = 1;
                if(m1 > 12) {
                    y1 =  y1 + 1;
                    m1 = 1;
                }
            }
        }
        return result;
    }
}
```
