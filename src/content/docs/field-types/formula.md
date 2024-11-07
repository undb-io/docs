---
title: Formula
description: 'The Formula field type in undb allows you to create dynamic calculated fields using formulas.'
sidebar:
  order: 12
---

# UnDB Formula Documentation

## Introduction

UnDB Formula is a powerful formula system that allows you to create dynamic calculated fields. You can use various built-in functions and operators to build formulas.

## Creating a Formula Field

1. Select "Formula" as the field type
2. Enter your formula in the formula editor
3. You can:
   - Write mathematical expressions directly
   - Use built-in functions
   - Reference other fields using `{{field_name}}` syntax
   - Combine multiple functions and operators

## Functions Reference

### Mathematical Functions

#### ADD
- Description: Adds two numbers together
- Syntax: `ADD(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `ADD(1, 2)` returns 3

#### SUBTRACT
- Description: Subtracts the second number from the first number
- Syntax: `SUBTRACT(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `SUBTRACT(10, 3)` returns 7

#### MULTIPLY
- Description: Multiplies two numbers
- Syntax: `MULTIPLY(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `MULTIPLY(4, 2)` returns 8

#### DIVIDE
- Description: Divides the first number by the second number
- Syntax: `DIVIDE(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `DIVIDE(10, 2)` returns 5

#### SUM
- Description: Adds a series of numbers
- Syntax: `SUM(number1, [number2, ...])`
- Parameters: One or more numbers
- Return Type: number
- Example: `SUM(1, 2, 3)` returns 6

#### MOD
- Description: Returns the remainder when one number is divided by another
- Syntax: `MOD(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `MOD(5, 2)` returns 1

#### POWER
- Description: Raises a number to the power of another number
- Syntax: `POWER(number1, number2)`
- Parameters: Two numbers
- Return Type: number
- Example: `POWER(2, 3)` returns 8

#### SQRT
- Description: Returns the square root of a number
- Syntax: `SQRT(number)`
- Parameters: One number
- Return Type: number
- Example: `SQRT(16)` returns 4

#### ABS
- Description: Returns the absolute value of a number
- Syntax: `ABS(number)`
- Parameters: One number
- Return Type: number
- Example: `ABS(-5)` returns 5

#### ROUND
- Description: Rounds a number to a specified number of decimal places
- Syntax: `ROUND(number, decimals)`
- Parameters:
  - number: The number to round
  - decimals: Number of decimal places
- Return Type: number
- Example: `ROUND(1.2345, 2)` returns 1.23

#### FLOOR
- Description: Rounds a number down to the nearest integer
- Syntax: `FLOOR(number)`
- Parameters: One number
- Return Type: number
- Example: `FLOOR(1.7)` returns 1

#### CEILING
- Description: Rounds a number up to the nearest integer
- Syntax: `CEILING(number)`
- Parameters: One number
- Return Type: number
- Example: `CEILING(1.2)` returns 2

#### MIN
- Description: Returns the smallest number in a list
- Syntax: `MIN(number1, [number2, ...])`
- Parameters: One or more numbers
- Return Type: number
- Example: `MIN(1, 2, 3)` returns 1

#### MAX
- Description: Returns the largest number in a list
- Syntax: `MAX(number1, [number2, ...])`
- Parameters: One or more numbers
- Return Type: number
- Example: `MAX(1, 2, 3)` returns 3

#### AVERAGE
- Description: Returns the average of a list of numbers
- Syntax: `AVERAGE(number1, [number2, ...])`
- Parameters: One or more numbers
- Return Type: number
- Example: `AVERAGE(1, 2, 3)` returns 2

### Text Functions

#### CONCAT
- Description: Concatenates multiple strings together
- Syntax: `CONCAT(string1, [string2, ...])`
- Parameters: One or more strings
- Return Type: string
- Example: `CONCAT('Hello', ' ', 'World')` returns "Hello World"

#### UPPER
- Description: Converts text to uppercase
- Syntax: `UPPER(string)`
- Parameters: One string
- Return Type: string
- Example: `UPPER('hello')` returns "HELLO"

#### LOWER
- Description: Converts text to lowercase
- Syntax: `LOWER(string)`
- Parameters: One string
- Return Type: string
- Example: `LOWER('HELLO')` returns "hello"

#### TRIM
- Description: Removes leading and trailing whitespace
- Syntax: `TRIM(string)`
- Parameters: One string
- Return Type: string
- Example: `TRIM('  hello  ')` returns "hello"

#### LEFT
- Description: Returns the leftmost characters
- Syntax: `LEFT(string, count)`
- Parameters:
  - string: The input string
  - count: Number of characters to return
- Return Type: string
- Example: `LEFT('hello', 2)` returns "he"

#### RIGHT
- Description: Returns the rightmost characters
- Syntax: `RIGHT(string, count)`
- Parameters:
  - string: The input string
  - count: Number of characters to return
- Return Type: string
- Example: `RIGHT('hello', 2)` returns "lo"

#### MID
- Description: Returns a substring from a string
- Syntax: `MID(string, start, count)`
- Parameters:
  - string: The input string
  - start: Starting position
  - count: Number of characters
- Return Type: string
- Example: `MID('hello', 2, 3)` returns "llo"

#### LEN
- Description: Returns the length of a string
- Syntax: `LEN(string)`
- Parameters: One string
- Return Type: number
- Example: `LEN('hello')` returns 5

#### REPLACE
- Description: Replaces a substring within a string
- Syntax: `REPLACE(string, old_text, new_text)`
- Parameters:
  - string: The input string
  - old_text: Text to replace
  - new_text: Replacement text
- Return Type: string
- Example: `REPLACE('hello', 'e', 'o')` returns "hollo"

#### SUBSTITUTE
- Description: Replaces a substring within a string
- Syntax: `SUBSTITUTE(string, old_text, new_text, instance_num)`
- Parameters:
  - string: The input string
  - old_text: Text to replace
  - new_text: Replacement text
  - instance_num: Which occurrence to replace
- Return Type: string
- Example: `SUBSTITUTE('hello hello', 'e', 'o', 1)` returns "hollo hello"

#### REPEAT
- Description: Repeats a string a specified number of times
- Syntax: `REPEAT(string, number)`
- Parameters:
  - string: The string to repeat
  - number: Number of times to repeat
- Return Type: string
- Example: `REPEAT('hello', 3)` returns "hellohellohello"

#### SEARCH
- Description: Returns the position of a substring within a string
- Syntax: `SEARCH(find_text, within_text)`
- Parameters:
  - find_text: Text to find
  - within_text: Text to search within
- Return Type: number
- Example: `SEARCH('e', 'hello')` returns 1

#### SUBSTR
- Description: Returns a substring from a string
- Syntax: `SUBSTR(string, start, length)`
- Parameters:
  - string: The input string
  - start: Starting position
  - length: Length of substring
- Return Type: string
- Example: `SUBSTR('hello', 2, 3)` returns "ll"

### Logical Functions

#### IF
- Description: Returns one value if condition is true, another if false
- Syntax: `IF(condition, value_if_true, value_if_false)`
- Parameters:
  - condition: boolean expression
  - value_if_true: any type
  - value_if_false: any type
- Return Type: any
- Example: `IF({{age}} >= 18, 'Adult', 'Minor')`

#### SWITCH
- Description: Returns a value based on matching expressions
- Syntax: `SWITCH(expr, pattern1, value1, [pattern2, value2, ...], [default])`
- Parameters: Expression followed by pattern-value pairs and optional default
- Return Type: any
- Example: `SWITCH({{status}}, 1, 'Active', 2, 'Pending', 'Unknown')`

#### AND
- Description: Returns true if all conditions are true
- Syntax: `AND(condition1, [condition2, ...])`
- Parameters: Two or more boolean values
- Return Type: boolean
- Example: `AND({{age}} > 18, {{has_license}} = true)`

#### OR
- Description: Returns true if any condition is true
- Syntax: `OR(condition1, [condition2, ...])`
- Parameters: Two or more boolean values
- Return Type: boolean
- Example: `OR({{status}} = 'active', {{status}} = 'pending')`

#### NOT
- Description: Returns the opposite of a boolean value
- Syntax: `NOT(condition)`
- Parameters: One boolean value
- Return Type: boolean
- Example: `NOT({{is_completed}})`

#### XOR
- Description: Returns true if an odd number of arguments are true
- Syntax: `XOR(condition1, [condition2, ...])`
- Parameters: Two or more boolean values
- Return Type: boolean
- Example: `XOR(true, false)` returns true

#### ISBLANK
- Description: Returns true if the value is blank
- Syntax: `ISBLANK(value)`
- Parameters: Any value
- Return Type: boolean
- Example: `ISBLANK('')` returns true

#### ISNUMBER
- Description: Returns true if the value is a number
- Syntax: `ISNUMBER(value)`
- Parameters: Any value
- Return Type: boolean
- Example: `ISNUMBER(1)` returns true

#### ISTEXT
- Description: Returns true if the value is text
- Syntax: `ISTEXT(value)`
- Parameters: Any value
- Return Type: boolean
- Example: `ISTEXT('hello')` returns true

### System Functions

#### JSON_EXTRACT
- Description: Extracts a value from a JSON string
- Syntax: `JSON_EXTRACT(json_string, path)`
- Parameters:
  - json_string: A valid JSON string
  - path: JSONPath expression
- Return Type: any
- Example: `JSON_EXTRACT('{"name":"John"}', '$.name')` returns "John"

#### RECORD_ID
- Description: Returns the ID of the current record
- Syntax: `RECORD_ID()`
- Parameters: None
- Return Type: string
- Example: `RECORD_ID()` returns e.g. "rec123"

#### AUTO_INCREMENT
- Description: Returns an auto-incrementing number
- Syntax: `AUTO_INCREMENT()`
- Parameters: None
- Return Type: number
- Example: `AUTO_INCREMENT()` returns next number in sequence

## Field References

To reference another field in your formula:
```
{{field_name}}
```

## Operators

The following operators are supported in formulas:

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `^`
- Comparison: `=`, `!=`, `<`, `<=`, `>`, `>=`
- Logical: `AND`, `OR`, `NOT