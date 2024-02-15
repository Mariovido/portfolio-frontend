# Recursive Digit Sum

## Intuition

The problem seems to involve finding the super digit of a given number `n`, which is calculated by summing the digits of `n`, and then recursively summing the digits of the result until a single-digit number is obtained. Additionally, the problem requires considering the digit sum multiplied by a factor `k`.

## Approach

The approach implemented in the provided code is to first find the digit sum of the given number `n` using the `findSum` method. Then, this sum is multiplied by `k`. If the resulting super digit is greater than `9`, the process is repeated until a single-digit number is obtained. This is done recursively within the `findSum` method.

## Complexity

- Time complexity: The time complexity of the `findSum` method is `O(d)`, where `d` is the number of digits in the input number `n`. Since the recursion in `findSum` progresses by reducing the number of digits in each step, the overall time complexity of the `superDigit` method can be considered `O(d)`, where `d` is the number of digits in the final super digit after multiplication by `k`.

- Space complexity: The space complexity of the recursive calls in the `findSum` method depends on the depth of recursion, which is at most equal to the number of digits in the input number `n`. Hence, the space complexity is also `O(d)`.

## Code

```java
class Result {
    public static int superDigit(String n, int k) {
        int superDigit = findSum(n) * k;

        if (superDigit > 9) superDigit = findSum(String.valueOf(superDigit));

        return superDigit;
    }

    public static int findSum(String num) {
        if (num.length() == 1) return Integer.parseInt(num);

        int sum = 0;
        for (int i = 0; i < num.length(); i++) {
            sum += Integer.parseInt(String.valueOf(num.charAt(i)));
        }

        return findSum(String.valueOf(sum));
    }
}
```
