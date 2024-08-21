---
title: Select
sidebar:
  order: 6
---

In **undb**, the **Select** type field is used to provide predefined options for a field, allowing users to choose from a list of values. This field type is highly customizable, supporting both single-select and multi-select configurations.

## Key Features of Select Type

### 1. Adding Options

- **Predefined Options**: When creating a Select field, you can define a list of options that users can choose from. This ensures consistency in the data and simplifies the process of data entry.

### 2. Single-Select vs. Multi-Select

- **Single-Select**: In single-select mode, users can choose only one option from the list. This is ideal for fields where only one value is applicable, such as selecting a category, status, or priority level.

- **Multi-Select**: In multi-select mode, users can select multiple options from the list. This is useful in scenarios where more than one value might apply, such as selecting tags, skills, or preferences.

### 3. Constraints for Multi-Select

- **Maximum Option Count**: When using multi-select, you can set a maximum number of options that a user can select. This helps in scenarios where only a limited number of selections should be made.
- **Minimum Option Count**: Similarly, you can set a minimum number of options that a user must select before saving the record. This is useful when it’s necessary for users to choose at least a certain number of options.

### 4. Default Values and Required Constraint

- **Required**: You can set the Select field as required, meaning that users must choose at least one option before saving the record.
- **Default Option**: You can define a default option (or options in the case of multi-select) that will be automatically selected when a new record is created.

### 5. Use Cases

- **Categorization**: Use single-select for categorizing items, such as product types, departments, or user roles.
- **Tags and Labels**: Use multi-select for tagging records with multiple relevant keywords, labels, or attributes.
- **Preferences**: Use multi-select with minimum and maximum constraints to capture user preferences, such as product features, communication methods, or service options.

By utilizing the Select type field in **undb**, you can enforce structured choices, streamline data entry, and ensure that your records are consistently categorized based on the predefined options.
