# Plus Minus

## Intuition

The problem seems to require calculating the fraction of positive, negative, and zero elements in a given list of integers.

## Approach

We can iterate through the list of integers and keep track of the counts of positive, negative, and zero elements. After counting, we can calculate the fractions by dividing each count by the total number of elements in the list.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of elements in the input list. This is because we iterate through the list once to count the occurrences of positive, negative, and zero elements.

- Space complexity: `O(1)` because we are using a fixed-size array to store the counts of positive, negative, and zero elements, regardless of the size of the input list. Additionally, we're using a constant amount of extra space for the `DecimalFormat` object. Therefore, the space complexity is constant.

## Code

```java
public static void plusMinus(List<Integer> arr) {
    DecimalFormat df = new DecimalFormat("#.######");

    final Double[] results = new Double[3];
    Arrays.fill(results, 0D);

    for (Integer number : arr) {
        if (number > 0) results[0]++;
        else if (number < 0) results[1]++;
        else if (number == 0) results[2]++;
    }

    System.out.println(df.format(results[0] / arr.size()));
    System.out.println(df.format(results[1] / arr.size()));
    System.out.println(df.format(results[2] / arr.size()));
}
```
