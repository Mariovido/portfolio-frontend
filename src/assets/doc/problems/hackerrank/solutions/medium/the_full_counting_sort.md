# The Full Counting Sort

## Intuition

The code snippet implements a sorting technique specifically tailored for scenarios where the data elements are categorized into a fixed range of integers. The problem appears to be related to a sorting variant used often in challenges like the "Full Counting Sort". The intuition here is to sort elements based not on comparison but on their categorization according to an integer key, which indicates their position in the output. This approach is particularly efficient when dealing with large datasets with a limited range of key values.

## Approach

1. **Initialization:**

   - Retrieve the size `n` of the input list `arr`.
   - Create a new list of lists, `output`, which will store the sorted groups. Initialize this list with sublists to handle each potential key value from 0 up to the minimum of `n` and 100 (assuming keys range from 0 to 99).

2. **Categorizing Data:**

   - Iterate through each element in `arr`:
     - Extract the integer `index` from the first element of each sublist which represents the category.
     - Depending on the position of the element (if it is in the first half of the list or not), either a hyphen "-" (for the first half) or the actual string (for the second half) is chosen.
     - Add this element to the corresponding sublist in `output` based on its `index`.

3. **Building the Output String:**

   - Initialize a `StringBuilder` to accumulate the sorted results.
   - Iterate through each sublist in `output`. For each string in a sublist, append it to the `StringBuilder` followed by a space.

4. **Output the Result:**
   - Convert the `StringBuilder` content to a string and print it.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of elements in the input list. This complexity arises as the function iterates through all elements to distribute them into buckets and again to concatenate them into the final output string.

- Space complexity: `O(n)`, primarily due to the storage requirements of the `output` list which in the worst-case stores all elements of the input list `arr`, albeit distributed among various sublists.

## Code

```java
class Result {
    public static void countSort(List<List<String>> arr) {
        int n = arr.size();
        List<List<String>> output = new ArrayList<>();

        for (int i = 0; i < Math.min(n, 100); i++) {
            output.add(new ArrayList<>());
        }

        for (int i = 0; i < n; i++) {
            int index = Integer.parseInt(arr.get(i).get(0));
            String value = i < n / 2 ? "-" : arr.get(i).get(1);
            output.get(index).add(value);
        }

        StringBuilder result = new StringBuilder();
        for (List<String> list : output) {
            for (String s : list) {
                result.append(s).append(" ");
            }
        }
        System.out.print(result.toString());
    }
}
```
