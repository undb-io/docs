---
title: Currency
sidebar:
  order: 3.1
---

## Overview

The `currency` field in undb is designed to store and manage monetary values efficiently. This field type is specifically tailored to handle financial data, ensuring that all currency-related entries are accurately formatted and easily sortable or filterable.

## Key Features

- **Currency Format:** Users can specify the currency symbol (e.g., `$`, `€`, `¥`) to be displayed alongside the value. This can be configured based on the user's locale or the specific needs of the table.

- **Validation:** The `currency` field includes built-in validation to ensure that only numeric values are entered. Users can also set constraints, such as minimum and maximum values, to prevent outliers or invalid entries.

- **Default Value:** Users can set a default value for the `currency` field, which will be automatically applied to new records unless overridden by the user.

- **Sorting and Filtering:** The `currency` field supports sorting and filtering based on the numeric value, allowing users to easily find and organize data by monetary amounts.

## Configuration Options

When creating or editing a `currency` field, users can configure the following options:

1. **Field Name:** The name of the currency field as it will appear in the table.
2. **Currency Symbol:** The symbol to be displayed alongside the currency value (e.g., `$` for USD, `€` for EUR).
3. **Minimum Value:** The minimum allowable value for this field. Entries below this value will be rejected.
4. **Maximum Value:** The maximum allowable value for this field. Entries above this value will be rejected.
5. **Default Value:** The value that will be automatically filled in for new records.
6. **Required:** A toggle to make this field mandatory for all records in the table.

## Use Cases

The `currency` field is ideal for scenarios where accurate financial data management is crucial. Examples include:

- **Invoicing Systems:** Where each line item requires precise pricing.
- **E-Commerce Platforms:** To store product prices in different currencies.
- **Expense Tracking Applications:** For logging and categorizing expenses with accurate monetary values.
- **Budget Management:** To manage budget allocations and track expenditures.

## API Integration

When using the undb API, the `currency` field behaves similarly to other numeric fields but includes the currency symbol and formatting information. The value is typically returned as a string with the symbol prefixed (e.g., `$100.00`), and operations like filtering or sorting can be performed based on the numeric value alone.

## Best Practices

- **Consistent Currency Usage:** Ensure that all currency fields within the same table or base use the same currency symbol and formatting to avoid confusion.
- **Validation:** Utilize the minimum and maximum value constraints to maintain data integrity, particularly in financial applications.

This updated documentation provides a clear and concise guide to understanding and using the `currency` field in undb, reflecting the accurate features available in the platform.
