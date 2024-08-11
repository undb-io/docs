---
title: Field overview
sidebar:
  order: 1
---

# Understanding Fields

In **undb**, a **Field** is the equivalent of a column in a database. Fields define the structure of your data within a Table, specifying the type of data that can be stored and the rules that govern it. Each Table consists of both system fields and custom fields, allowing for a flexible and structured approach to data management.

## Types of Fields

### 1. System Fields

- **Automatically Created**: When you create a new Table, several system fields are automatically generated. These fields are essential for tracking and managing data within **undb**.
- **Examples**:
  - **id**: A unique identifier for each record.
  - **autoIncrement**: Automatically increments with each new record.
  - **createdAt**: Timestamp when the record was created.
  - **createdBy**: The user who created the record.
  - **updatedAt**: Timestamp when the record was last updated.
  - **updatedBy**: The user who last updated the record.

### 2. Custom Fields

- **User-Defined**: In addition to system fields, you can create custom fields when setting up or modifying a Table. Custom fields allow you to tailor the Table's schema to fit the specific needs of your data.
- **Field Types**: Custom fields can be of various types, such as text, number, date, and more, depending on the nature of the data.

## Field Constraints

Fields in **undb** can have constraints to ensure data integrity and consistency:

- **Unique Name**: Field names inside a table is unique.
- **Required**: A field can be marked as required, meaning that it must have a value for each record in the Table.
- **Maximum and Minimum Values**: For fields like numbers or dates, you can set maximum and minimum values to restrict the range of acceptable data.
- **Other Constraints**: Depending on the field type, other constraints like length (for text fields) or format (for email fields) can be applied.

## Updatable Fields

Some fields in **undb** are designed to be updated by users, and these fields offer additional customization options:

- **Default Values**: You can set default values for updatable fields, ensuring that new records have a pre-defined starting point.
- **Display Fields**: Fields can be configured as display fields, which means they are prominently shown in views and summaries of the data. This helps in identifying and categorizing records at a glance.

## Field Management

- **Adding and Modifying Fields**: During the creation of a Table or later on, you can add or modify fields to adjust the data structure as needed. This flexibility allows you to adapt your Tables as your project evolves.
- **Updating Constraints**: Constraints can be updated as your data requirements change, ensuring that your Table always enforces the correct rules for data entry and management.

By understanding and effectively using Fields in **undb**, you can create robust and structured Tables that accurately reflect and manage your data, providing a solid foundation for all your application needs.
