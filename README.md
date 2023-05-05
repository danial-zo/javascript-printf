# JavaScript Simple printf()

`printf()` is a custom implementation of the `printf()` function for JavaScript that allows you to format and output strings with variables using a format string with placeholders. This implementation supports basic string formatting with placeholders for string and decimal number variables.

## Usage

To use `printf()` in your JavaScript code, call the function with a format string as its first argument, followed by any number of variable arguments to be inserted into the string. The format string should contain placeholders for the variables, which are represented by `%s` for strings and `%d` for decimal numbers.

Here's an example usage of `printf()`:

```javascript
var name = "John";
var age = 25;
printf("My name is %s and I am %d years old.", name, age);
```

This will output the string `"My name is John and I am 25 years old."` to the console.

## Contributing

If you have any suggestions or bug reports, feel free to open an issue or submit a pull request on the GitHub repository.