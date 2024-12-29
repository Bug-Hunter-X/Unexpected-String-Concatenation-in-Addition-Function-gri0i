# Unexpected String Concatenation in JavaScript Function

This repository demonstrates a common yet subtle error in JavaScript: unexpected string concatenation when using the `+` operator with numbers and strings.  The `foo` function intends to add two numbers, but if either input is a string, it will perform string concatenation instead of numerical addition.

## Bug

The provided JavaScript code demonstrates this issue. If you pass numbers, it works fine; however, if a string is provided, you will get an unexpected result.

## Solution

The solution file shows how to properly type check the parameters or use `parseInt()` to ensure numerical addition regardless of input type.
