# 1700. Number of Students Unable to Eat Lunch

## Intuition

The problem seems to involve distributing sandwiches to students based on their preferences. We can start by counting the number of students who prefer each type of sandwich. Then, we can iterate through the sandwiches to check if we can satisfy each student's preference.

## Approach

1. Initialize an array `count` of size `2` to count the number of students who prefer each type of sandwich.
2. Iterate through the `students` array, incrementing the count of each type of sandwich preference.
3. Iterate through the `sandwiches` array.
4. Check if there are any students left who prefer the current type of sandwich. If not, return the number of remaining students who prefer the other type of sandwich.
5. Decrement the count of students who prefer the current type of sandwich.
6. Repeat steps `4` and `5` until all sandwiches are distributed or all students' preferences are satisfied.
7. If all sandwiches are distributed, return `0`.

## Complexity

- Time complexity: `O(n)`, where `n` is the total number of students.

- Space complexity: `O(1)`, since we use a constant amount of extra space (the `count` array has a fixed size regardless of the input size).

## Code

```java
class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int[] count = new int[2];

        for (int student : students) {
            count[student]++;
        }

        for (int sandwich : sandwiches) {
            if (count[sandwich] == 0) return count[1 - sandwich];
            count[sandwich]--;
        }
        return 0;
    }
}
```
