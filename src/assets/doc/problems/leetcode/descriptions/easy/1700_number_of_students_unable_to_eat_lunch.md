# 1700. Number of Students Unable to Eat Lunch

## Description

In this problem, students queue up to eat sandwiches of different shapes (circular or square). Each student has a preference for a particular shape of sandwich. The sandwiches are placed in a stack, and each student takes the top sandwich if it matches their preference, otherwise, they leave it and go to the end of the queue. The problem requires determining the number of students who are unable to eat.

## Function

```java
public int countStudents(int[] students, int[] sandwiches) {}
```

## Input Format

- Two integer arrays: `students` and `sandwiches`, where `students[i]` represents the preference of the `i^{​​​​​​th}` student (`0` for circular, `1` for square) and `sandwiches[i]` represents the type of the `i​​​​​​^{th}` sandwich in the stack (`0` for circular, `1` for square).

## Output Format

- An integer representing the number of students unable to eat.

## Constraints

- `1 <= students.length, sandwiches.length <= 100`
- `students.length == sandwiches.length`
- `sandwiches[i]` is `0` or `1`
- `students[i]` is `0` or `1`

## Example

```bash
# Sample Input
students = [1,1,0,0], sandwiches = [0,1,0,1]

# Sample Output
0
```
