# 2092. Find All People With Secret

## Intuition

The code aims to find all the people who know a secret based on a series of meetings between individuals. It sorts the meetings by time and iterates through them to update the knowledge of secrets among people using a breadth-first search approach.

## Approach

1. Sort the `meetings` array by time to process them in chronological order.
2. Initialize an array `secrets` to keep track of people who know secrets. Initialize the first person and the target person (`firstPerson`) as knowing the secret.
3. Create a map `knowledgeMap` to store the knowledge of secrets exchanged in meetings.
4. Iterate through the `meetings`:
   - If the current time is different from the previous time, clear the `knowledgeMap`.
   - If either person in the meeting doesn't know the secret, update the `knowledgeMap` with their exchange of secrets.
   - If at least one person in the meeting knows the secret, add the other person to the `queue` for further processing.
     - While the `queue` is not empty, process each person:
       - Mark the person as knowing the secret.
       - Add their known contacts to the `queue` for processing.
       - Remove the processed person from the `knowledgeMap`.
5. Populate the `result` list with the indices of people who know the secret.
6. Return the `result` list.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the meetings takes `O(n * log(n))` time.
  - Processing each meeting takes `O(n)` time.

- Space complexity: `O(n)`
  - Additional space is used for the `secrets` array, `knowledgeMap`, and the `queue`, each taking `O(n)` space.

## Code

```java
class Solution {
    public List<Integer> findAllPeople(int n, int[][] meetings, int firstPerson) {
        Arrays.sort(meetings, (a, b) -> a[2] - b[2]);

        boolean[] secrets = new boolean[n];
        secrets[0] = true;
        secrets[firstPerson] = true;

        Map<Integer, Set<Integer>> knowledgeMap = new HashMap<>();
        Deque<Integer> queue = new ArrayDeque<>();
        int prevTime = 0;
        for (int[] meeting : meetings) {
            int x = meeting[0];
            int y = meeting[1];
            int time = meeting[2];

            if (prevTime != time) {
                prevTime = time;
                knowledgeMap.clear();
            }

            if (!secrets[x] || !secrets[y]) {
                knowledgeMap.computeIfAbsent(x, k -> new HashSet<>()).add(y);
                knowledgeMap.computeIfAbsent(y, k -> new HashSet<>()).add(x);
            }

            if (secrets[x] || secrets[y]) {
                if (!secrets[x]) queue.offer(x);
                if (!secrets[y]) queue.offer(y);

                while (!queue.isEmpty()) {
                    int person = queue.poll();

                    secrets[person] = true;
                    for (int temp : knowledgeMap.getOrDefault(person, new HashSet<>())) {
                        if (!secrets[temp]) queue.offer(temp);
                    }
                    knowledgeMap.remove(person);
                }
            }
        }

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < secrets.length; i++) {
            if (secrets[i]) result.add(i);
        }

        return result;
    }
}
```
