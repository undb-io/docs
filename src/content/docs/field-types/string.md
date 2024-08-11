---
title: String
sidebar:
  order: 1
---

In **undb**, the **String** type field is used to store simple text data. It is one of the most commonly used field types, offering flexibility in how text data is stored and displayed.

## Key Features of String Type

### 1. Simple Text Storage

- **Text Data**: The String type is designed to hold textual data, such as names, descriptions, addresses, or any other information that can be represented as a string of characters.

### 2. Default Value

- **Setting a Default Value**: When creating a String field, you can define a default value. This default value will automatically populate the field when a new record is created, unless another value is provided. This is useful for fields that often have the same value or when you want to ensure a consistent starting point for data entry.

### 3. Constraints

String fields in **undb** can have several constraints to ensure data integrity:

- **Required**: You can specify whether the field is mandatory. If set to required, every record must have a value for this field.
- **Maximum Length**: Set a maximum number of characters that the string can contain. This is useful for fields like names or codes where length limits are important.
- **Minimum Length**: Similarly, you can set a minimum length to ensure that the entered string meets a certain character count, which might be important for fields like IDs or passwords.

### 4. Display Field

- **Setting as Display Field**: The String field can be designated as a display field. When a field is set as a display field, it becomes a primary identifier for records in views and summaries. This helps in easily recognizing and managing records based on key text values.

## Use Cases

- **Name Fields**: Store first names, last names, or full names.
- **Descriptions**: Capture brief descriptions or notes.
- **Identifiers**: Use for unique codes, usernames, or other textual identifiers.

By utilizing the String type field in **undb**, you can effectively manage and constrain textual data within your Tables, ensuring that your data is both structured and easy to work with.
