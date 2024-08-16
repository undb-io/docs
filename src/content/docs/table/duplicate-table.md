---
title: Duplicate Table
sidebar:
  order: 3
---

In **undb**, duplicating a table allows you to create a copy of an existing table, with options to customize the duplication process. This feature is particularly useful for creating backups, testing, or developing variations of your data structure.

## Steps to Duplicate a Table

### 1. Access the Table

- **Navigate to the Table**: Go to the table you wish to duplicate. Make sure the table contains the structure and data you want to replicate.

### 2. Initiate the Duplication

- **Duplicate Option**: Find the option to duplicate the table, usually available in the table's settings or context menu. Click on this option to start the duplication process.

### 3. Configure the Duplication

- **Input New Name**: You will be prompted to enter a new name for the duplicated table. This allows you to easily identify the new table in your workspace.

- **Import Data**: You can choose whether to import the data from the original table into the new table. If you select this option, all records from the original table will be copied to the new table.

- **System Fields Update**: During the duplication, system fields such as `createdBy`, `createdAt`, `updatedBy`, and `updatedAt` will be automatically updated. The `createdBy` and `updatedBy` fields will reflect the user performing the duplication, and `createdAt` and `updatedAt` will be set to the current time.

### 4. Data and Structure Replication

- **Data Copying**: If you chose to import data, all records from the original table will be included in the new table. This includes all fields, values, and configurations.

- **Reference Fields**: If the original table contains reference fields (columns that link to other tables), a new column will be created in the related table to maintain the relationship. This ensures that the data integrity and relationships are preserved in the duplicated table.

### 5. Review the Duplicated Table

- **New Table**: After the duplication process is complete, the new table will appear in your workspace with the specified name. You can then proceed to modify or use this table as needed.

## Summary

Duplicating a table in **undb** provides a flexible way to replicate your data and structure, with options to rename the table and decide whether to import existing data. System fields are automatically updated to reflect the new table’s creation, ensuring accuracy in tracking data history. This feature is particularly useful for managing complex data operations and creating backups.
