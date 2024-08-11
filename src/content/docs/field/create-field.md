---
title: Create field
sidebar:
  order: 3
---

In **undb**, fields are the fundamental components that define the structure of your data within a table. You can create fields either during the initial table setup or by adding them to an existing table at any time.

## Steps to Create a Field

### 1. Initiating Field Creation

- **During Table Creation**: When setting up a new table, you’ll have the opportunity to define fields as part of the initial schema configuration. This is where you establish the structure of your table from the outset.
- **Adding Fields to Existing Tables**: If you need to add more fields to an existing table, you can do so by clicking the **"+" button** on the grid header of the table. This allows you to expand and modify your table’s schema as your project evolves.

### 2. Setting the Field Name

- **Name Your Field**: Enter a descriptive name for the field that clearly represents the data it will store. Field names should be intuitive to make it easier to understand the data structure at a glance.

### 3. Choosing the Field Type

- **Select Field Type**: **undb** offers a variety of field types to accommodate different kinds of data:
  - **Text**: For storing text strings.
  - **Number**: For numeric values.
  - **Date**: For date and time entries.
  - **Boolean**: For true/false values.
  - **Select**: For predefined option lists.
  - **Other Types**: Depending on your needs, other field types like JSON, Email, or URL can be selected.

### 4. Configuring Default Values and Constraints

- **Default Values**: If applicable, you can set a default value for the field. Importantly, if a default value is set, this value will automatically be applied to all existing records in the table when the field is created. This ensures consistency across your data and saves time by populating the field with a standard value from the start.

- **Applying Constraints**: Depending on the field type, you can enforce constraints to maintain data integrity:
  - **Required**: Specify if the field must have a value in every record.
  - **Maximum and Minimum Values**: For numeric or date fields, set the allowable range of values.
  - **Length Constraints**: For text fields, you can limit the maximum and minimum number of characters.

### 5. Finalizing the Field

- **Review and Confirm**: After configuring the field name, type, default values, and constraints, review your settings to ensure they meet your requirements.
- **Create Field**: Once satisfied, confirm the creation of the field. If a default value is provided, it will be automatically applied to all existing records in the table. Your new field will then be available for use within your table.

By following these steps, you can effectively create and configure fields in **undb**, ensuring that your tables are well-structured and capable of handling the specific types of data your project requires.
