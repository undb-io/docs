---
title: Create field
sidebar:
  order: 3
---

# Creating a Field

In **undb**, fields are the building blocks of your Tables, defining the structure and type of data you can store. You can create fields either during the initial creation of a Table or by adding them later using the grid interface.

## Steps to Create a Field

### 1. Initiating Field Creation

- **During Table Creation**: When setting up a new Table, you’ll have the option to define fields as part of the initial schema configuration. This is where you set up the structure of your Table from the start.
- **Adding Fields Later**: If you need to add more fields after the Table has been created, you can do so by clicking the **"+" button** on the grid header of the Table. This allows you to expand and modify your Table’s schema as your project evolves.

### 2. Setting the Field Name

- **Name Your Field**: Enter a name for the field that clearly represents the data it will store. Field names should be descriptive to make it easier to understand the data structure at a glance.

### 3. Choosing the Field Type

- **Select Field Type**: **undb** offers a variety of field types to suit different data needs, such as:
  - **String**: For storing strings of text.
  - **Number**: For numeric values, including integers and decimals.
  - **Date**: For date and time values.
  - **Checkbox**: For true/false values.
  - **Other Types**: Depending on the specific needs, you might select from other available field types.

### 4. Configuring Default Values and Constraints

- **Default Values**: Depending on the field type, you can set a default value that will automatically populate the field when a new record is created. This ensures consistency and saves time when entering data.

- **Applying Constraints**: Constraints help ensure data integrity and can be customized based on the field type:
  - **Required**: Make the field mandatory for each record.
  - **Minimum and Maximum Values**: For numeric or date fields, set limits on the range of acceptable values.
  - **Length Constraints**: For text fields, you can set limits on the length of the input.

### 5. Finalizing the Field

- **Review Settings**: After configuring the field name, type, default values, and constraints, review your settings to ensure they align with your data requirements.
- **Add Field**: Once you’re satisfied, confirm the creation of the field. The new field will now be part of your Table’s schema, ready to store data.

By following these steps, you can effectively create and configure fields in **undb**, ensuring that your Tables are well-structured and capable of handling the specific types of data your project requires.
