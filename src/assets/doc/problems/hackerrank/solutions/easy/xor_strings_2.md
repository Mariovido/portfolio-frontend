# XOR Strings 2

## Intuition

When XORing two strings, we want to perform a bitwise `XOR` operation between corresponding characters of the strings. If the characters are the same, the result should be `0`, otherwise `1`. So, intuitively, we can iterate through both strings simultaneously and perform the `XOR` operation on each pair of characters.

## Approach

We can approach this problem by iterating through the characters of both strings simultaneously using a loop. At each iteration, we compare the corresponding characters of the strings. If they are equal, we append `0` to the result string; otherwise, we append `1`. Finally, we return the result string.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input strings `s` and `t`. This is because we iterate through both strings once.

- Space complexity: `O(n)`, where `n` is the length of the input strings `s` and `t`. The space complexity is dominated by the space used to store the result string, which can be at most the length of the longer input string.

## Code

```java
class Result {
    public static String stringsXOR(String s, String t) {
        String res = new String("");
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == t.charAt(i)) res += "0";
            else res += "1";
        }

        return res;
    }

    public static void main(String[] args) {
        String s, t;
        Scanner in = new Scanner(System.in);
        s = in.nextLine();
        t = in.nextLine();
        System.out.println(stringsXOR(s, t));
    }
}
```
