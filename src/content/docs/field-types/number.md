---
title: Number
sidebar:
  order: 2
---

In **undb**, the **Number** type field is used to store numerical data. This field type is versatile, allowing you to handle both integers and decimal numbers, with additional constraints to ensure the data fits your specific needs.

## Key Features of Number Type

### 1. Numerical Data Storage

- **Numeric Values**: The Number type is designed to hold numeric data, such as quantities, prices, measurements, or any other numerical information.

### 2. Constraints

Number fields in **undb** can have several constraints to maintain data integrity and ensure the correctness of the values stored:

- **Minimum Value**: You can set a minimum value that the field must meet. This is useful for fields where values below a certain threshold are not valid (e.g., age, quantity).
- **Maximum Value**: Similarly, you can set a maximum value, ensuring that the number does not exceed a certain limit (e.g., weight, score).
- **Integer Constraint**: You can specify whether the Number field should only accept integer values. When this constraint is applied, the field will not accept decimal values, making it ideal for counts, IDs, or other whole number data.

### 3. Default Value

- **Setting a Default Value**: Just like with String fields, you can set a default value for Number fields. This value will automatically populate the field in new records unless a different value is entered.

## Use Cases

- **Quantities**: Track item counts, stock levels, or order quantities.
- **Prices**: Store monetary values, with the ability to specify if decimals are allowed.
- **Scores or Ratings**: Use for any scenario where numbers represent scores, ratings, or other measurable data points.

By effectively using the Number type field in **undb**, you can ensure that your numerical data is accurately captured, constrained, and managed, making it easier to maintain data quality across your Tables.
