---
title: Create a table
sidebar:
  order: 2
---

# Creating a Table

In **undb**, creating a Table is a crucial step in organizing and managing your data. You can start with a blank table by defining its schema, import data from external sources like JSON, Excel, or CSV files, and benefit from automatically generated system fields.

## Steps to Create a Table

### 1. Start the Table Creation Process

- **Navigate to the Base**: Begin by navigating to the Base where you want to create the new Table.
- **Click the "+" Button**: On the Base's homepage, locate and click the **"+" button**. This will open a dialog box where you can configure the new Table.

### 2. Configure Table Name and Schema

- **Table Name**: In the dialog box, you’ll be prompted to enter a name for your new Table. Remember, the name must be unique within the Base.
- **Schema Configuration**: You can start defining the schema by adding fields (columns) to your Table. Specify the field names and data types according to the type of data you will store.

### 3. Importing a Table

If you have existing data in a JSON, Excel, or CSV file, you can choose to import this data directly into **undb**:

- **Select Import Option**: In the dialog box, choose the option to import a table from a JSON, Excel, or CSV file.
- **File Upload**: Upload the file containing your data. **undb** will automatically parse the file and present additional configuration options.
- **Import Configuration**:
  - **Import Data**: Decide whether you want to import the data along with the table structure or just the schema.
  - **First Row as Header**: Choose whether the first row of your file should be treated as the header (field names) or as regular data.
  - **Automatic Field Type Inference**: **undb** will automatically infer the field types based on the data provided in the file. You can review and adjust these as needed.

### 4. Automatic System Fields

- **System Fields**: Upon creating a Table, **undb** automatically generates a set of system fields to help manage and track your data. These fields include:

  - **id**: A unique identifier for each record.
  - **autoIncrement**: A field that automatically increments with each new record.
  - **createdAt**: The timestamp when the record was created.
  - **createdBy**: The user who created the record.
  - **updatedAt**: The timestamp when the record was last updated.
  - **updatedBy**: The user who last updated the record.

### 5. Finalizing and Creating the Table

- **Review Configuration**: Once you’ve set up the table name, schema, or import options, review all configurations to ensure they meet your needs.
- **Create Table**: Click the **Create** button to finalize the creation of the table. Your new Table will be added to the Base, complete with the system fields and ready for use.

By following these steps, you can easily create and configure Tables in **undb**, whether starting from scratch or importing existing data. This flexibility allows you to tailor your data structure to the specific needs of your project.
