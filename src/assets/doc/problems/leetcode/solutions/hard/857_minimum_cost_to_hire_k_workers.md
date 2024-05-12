# 857. Minimum Cost to Hire K Workers

## Intuition

The problem seems to involve finding the minimum cost to hire `k` workers from a given pool, where each worker has a certain quality and wage associated with them.

## Approach

1. First, we calculate the ratio of wage to quality for each worker and sort them based on this ratio in ascending order.
2. We then use a `PriorityQueue` to keep track of the qualities of the selected workers. We also maintain a variable `qsum` to keep track of the total quality of selected workers.
3. Iterate through the sorted workers:
   - Add the current worker's quality to qsum `and` add it to the `PriorityQueue`.
   - If the size of the `PriorityQueue` exceeds `k`, remove the worker with the highest quality from the `PriorityQueue` and update `qsum`.
   - If the size of the `PriorityQueue` is equal to `k`, calculate the cost of hiring these workers and update the result if it's lower than the current result.
4. Finally, return the minimum cost obtained.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the number of workers. Sorting the workers based on the wage-to-quality ratio takes `O(n * log(n))` time, and iterating through the sorted array takes linear time.

- Space complexity: `O(n)` for the space used to store the sorted workers and the `PriorityQueue`.

## Code

```java
class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        int n = wage.length;
        double[][] workers = new double[n][2];

        for (int i = 0; i < n; i++){
            workers[i] = new double[]{(double)wage[i]/quality[i], (double)quality[i]};
        }

        Arrays.sort(workers, (a, b) -> Double.compare(a[0], b[0]));

        PriorityQueue<Double> pq = new PriorityQueue<>((a,b)->Double.compare(b, a));
        double qsum = 0, res = Double.MAX_VALUE;
        for (double[] work : workers){
            qsum += work[1];
            pq.offer(work[1]);

            if (pq.size() > k) qsum -= pq.poll();
            if (pq.size() == k) res = Math.min(res, qsum * work[0]);
        }

        return res;
    }
}
```
