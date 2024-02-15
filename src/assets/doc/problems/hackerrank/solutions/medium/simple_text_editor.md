# Simple Text Editor

## Intuition

The code seems to implement a text editor where you can perform four types of operations: `append`, `delete`, `print`, and `undo`. It maintains a stack to keep track of previous states of the text, allowing for the `undo` operation.

## Approach

1. For each operation, parse the input to determine the type of operation and its parameters.
2. Implement methods for each operation:
   - `append`: Push the current state of the text onto the stack and append the given string.
   - `delete`: Push the current state of the text onto the stack and delete the last k characters.
   - `print`: Print the `k^{th}` character of the current text.
   - `undo`: Pop the previous state from the stack and set it as the current text.
3. Repeat this process until all `operations` are performed.

## Complexity

- Time complexity:

  - Each operation takes constant time `O(1)` since they involve simple string manipulation or stack operations.
  - Overall time complexity is `O(N)`, where `N` is the number of operations.

- Space complexity: `O(N)`, where `N` is the number of operations, due to the stack storing previous states of the text.

## Code

```java
class Result {
    public static final Stack<String> operations = new Stack<>();
    public static StringBuilder currentText = new StringBuilder();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberOfOperations = scanner.nextInt();
        scanner.nextLine();

        while(numberOfOperations > 0) {
            String[] nextLine = scanner.nextLine().split(" ");
            int typeOfOperation = Integer.parseInt(nextLine[0]);

            if (typeOfOperation == 1) {
                String stringToAppend = nextLine[1];
                append(stringToAppend);
            } else if (typeOfOperation == 2) {
                int charactersToDelete = Integer.parseInt(nextLine[1]);
                delete(charactersToDelete);
            } else if (typeOfOperation == 3) {
                int indexOfCharacterToPrint = Integer.parseInt(nextLine[1]);
                print(indexOfCharacterToPrint);
            } else if (typeOfOperation == 4) undo();

            numberOfOperations--;
        }

        scanner.close();
    }

    public static void append(String stringToAppend) {
        operations.push(currentText.toString());
        currentText.append(stringToAppend);
    }

    public static void delete(int k) {
        operations.push(currentText.toString());
        currentText.delete(currentText.length() - k, currentText.length());
    }

    public static void print(int k) {
        System.out.println(currentText.charAt(k - 1));
    }

    public static void undo() {
        if (operations.size() > 0) currentText = new StringBuilder(operations.pop());
    }
}
```
