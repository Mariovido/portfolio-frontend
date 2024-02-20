# 2402. Meeting Rooms III

## Intuition

The code appears to be attempting to find the room that has been booked the most number of times given a set of meetings. It utilizes a greedy approach, sorting the meetings by start time and then iterating through each meeting to find the earliest available room or the room that finishes its current meeting earliest.

## Approach

1. Sort the meetings array based on their start times.
2. Initialize an array `bookings` to keep track of the number of bookings each room has and another array `endTime` to keep track of the end time of each room's current booking.
3. Iterate through each meeting:
   - For each meeting, iterate through each room to find the earliest available room or the room that finishes its current meeting earliest.
   - If an available room is found, update the booking count and end time for that room.
   - If no available room is found, choose the room that finishes its current meeting earliest and update its booking count and end time.
4. After processing all meetings, find the room with the maximum number of bookings and return its index.

## Complexity

- Time complexity: `O(n * m)`, where `n` is the number of meetings and `m` is the number of rooms. Sorting the meetings takes `O(n * log(n))`, and for each meeting, we potentially iterate through all rooms.

- Space complexity: `O(n)`, where `n` is the number of rooms. We use arrays to store booking counts and end times for each room.

## Code

```java
class Solution {
    public int mostBooked(int n, int[][] meetings) {
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));

        int[] bookings = new int[n];
        long[] endTime = new long[n];

        for (int i = 0; i < meetings.length; i++) {
            int start = meetings[i][0];
            int end = meetings[i][1];
            boolean hasFoundRoom = false;
            int nextAvailableRoom = -1;
            long waitingDuration = Long.MAX_VALUE;

            for (int j = 0; j < n; j++) {
                if (endTime[j] < waitingDuration) {
                    waitingDuration = endTime[j];
                    nextAvailableRoom = j;
                }

                if (endTime[j] <= start) {
                    hasFoundRoom = true;
                    bookings[j]++;
                    endTime[j] = end;
                    break;
                }
            }

            if (!hasFoundRoom) {
                bookings[nextAvailableRoom]++;
                endTime[nextAvailableRoom] += (end - start);
            }
        }

        int maxBookings = -1;
        int mostBookedRoom = -1;
        for (int i = 0; i < n; i++) {
            if (bookings[i] > maxBookings) {
                maxBookings = bookings[i];
                mostBookedRoom = i;
            }
        }

        return mostBookedRoom;
    }
}
```
