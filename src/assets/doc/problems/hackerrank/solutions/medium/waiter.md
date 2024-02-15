# Waiter

## Intuition

The problem appears to involve manipulating stacks (represented by Deques) based on the primes at each step. As we iterate through the primes, we partition the elements into two stacks: one for elements divisible by the current prime and one for elements not divisible. Finally, we merge the stacks to form the result list.

## Approach

1. Generate a list of primes up to the qth prime using the `getPrimes` method.
2. Initialize a deque `a` with the given numbers.
3. Iterate through each prime from the list of primes:
   - Create temporary deques `tempA` and `tempB`.
   - Iterate through elements of `a`:
     - If the element is divisible by the current prime, push it onto `tempB`; otherwise, push it onto `tempA`.
   - Update `a` to be `tempA`.
   - Append elements from `tempB` to the result list `answers`.
4. After iterating through all primes, append the remaining elements in deque `a` to `answers`.
5. Return the `answers` list.

## Complexity

- Time complexity: `O(n * q + q * &#8730;q)`

  - Generating primes up to the `q^{th}` prime takes approximately `O(q * &#8730;q)`, as each prime check requires checking divisibility up to its square root.
  - Iterating through each element in the list once per prime takes `O(n * q)`, where `n` is the number of elements.

- Space complexity: `O(max(n, q))`
  - Space complexity is dominated by the list of primes and the deques used for temporary storage.
  - Generating primes up to the qth prime requires `O(q)` space.
  - Temporary deques require `O(n)` space.

## Code

```java
class Result {
    public static List<Integer> waiter(List<Integer> number, int q) {
        List<Integer> primes = getPrimes(q);
        List<Integer> answers = new ArrayList<>();

        Deque<Integer> a = new ArrayDeque<>(number);

        for (int i = 0; i < q; i++) {
            Deque<Integer> tempA = new ArrayDeque<>();
            Deque<Integer> tempB = new ArrayDeque<>();

            while (!a.isEmpty()) {
                int item = a.pollLast();

                if (item % primes.get(i) == 0) tempB.addLast(item);
                else tempA.addLast(item);
            }

            a = tempA;

            while (!tempB.isEmpty())
                answers.add(tempB.pollLast());
        }

        while(!a.isEmpty()) {
            answers.add(a.pollLast());
        }

        return answers;
    }

    private static List<Integer> getPrimes(int q) {
        List<Integer> primes = new ArrayList<>();

        int ith = 2;
        while (primes.size() < q) {
            if (isPrime(ith)) primes.add(ith);

            ith++;
        }

        return primes;
    }

    private static boolean isPrime(int num) {
        if (num < 2) return false;

        int sqrt = (int) Math.sqrt(num);

        for (int i = 2; i <= sqrt; i++) {
            if (num % i == 0) return false;
        }

        return true;
    }
}
```
