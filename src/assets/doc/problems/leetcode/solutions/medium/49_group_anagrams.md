## 49. Group Anagrams

## Intuition

The intuition behind solving this problem is to recognize that anagrams will have the same characters when sorted. By sorting the characters of each string, we can group anagrams together. We can use a hashmap to store the sorted version of strings as keys and their corresponding anagrams as values.

## Approach

1. Initialize a hashmap (`mapList`) to store anagrams. The key is the sorted version of the strings, and the value is a list of anagrams.
2. Iterate through each string in the input array (`strs`).
3. Sort the characters of the current string and convert it to a sorted string.
4. Check if the sorted string is already in the hashmap. If it is, add the original string to the list of anagrams. If not, create a new list and add the original string to it.
5. After processing all strings, the values of the hashmap represent groups of anagrams. Add these lists to the final result list.
6. Return the result list.

## Complexity

- Time complexity: `O(N * M * log(M))`, where `N` is the number of strings and `M` is the maximum length of a string. The dominant factor is the sorting of characters in each string.

- Space complexity: `O(N * M)`, where `N` is the number of strings and `M` is the maximum length of a string. The space is used to store the hashmap and the resulting list of anagrams.

## Code

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<>();

        Map<String, List<String>> mapList = new HashMap<>();
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sChars = String.valueOf(chars);

            List<String> temp = mapList.getOrDefault(sChars, new ArrayList<>());
            temp.add(str);
            mapList.put(sChars, temp);
        }

        result.addAll(mapList.values());

        return result;
    }

    // public List<List<String>> groupAnagrams(String[] strs) {
    //     Map<String, List<String>> anagramMap = new HashMap<>();

    //     for (String str : strs) {
    //         char[] charArray = str.toCharArray();
    //         Arrays.sort(charArray);
    //         String sortedStr = new String(charArray);

    //         anagramMap.computeIfAbsent(sortedStr, k -> new ArrayList<>()).add(str);
    //     }

    //     return new ArrayList<>(anagramMap.values());
    // }
}
```
