# Zig Zag Sequence

## Intuition

The goal of the `findZigZagSequence` function appears to be to rearrange the elements of the input array `a` into a "zigzag" sequence. In a zigzag sequence, the elements are sorted in ascending order, but with the peak of the zigzag being the median of the array.

## Approach

1. Sort the input array a in ascending order using `Arrays.sort(a)`.
2. Find the index of the median element. This can be calculated as `mid = n / 2`, where `n` is the length of the array.
3. Swap the median element with the last element of the array.
4. Set two pointers, `st` and `ed`, initially pointing to the element next to the median and the second last element respectively.
5. Swap elements between `st` and `ed` until `st` becomes greater than or equal to `ed`.
6. Print the rearranged array.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the array takes `O(n * log(n))` time.
  - Swapping elements in the zigzag sequence takes `O(n / 2)` time.
  - Printing the array takes `O(n)` time.

- Space complexity: `O(1)` because the algorithm uses only a constant amount of extra space for variables regardless of the size of the input array.

## Code

```java
class Result {
    public static void findZigZagSequence(int[] a, int n) {
        Arrays.sort(a);
        int mid = n/2;
        int temp = a[mid];
        a[mid] = a[n - 1];
        a[n - 1] = temp;

        int st = mid + 1;
        int ed = n - 2;
        while(st <= ed){
            temp = a[st];
            a[st] = a[ed];
            a[ed] = temp;
            st = st + 1;
            ed = ed - 1;
        }
        for(int i = 0; i < n; i++){
            if(i > 0) System.out.print(" ");
            System.out.print(a[i]);
        }
        System.out.println();
    }
}
```
