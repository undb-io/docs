---
title: Duplicate base
sidebar:
  order: 3
---

In **undb**, duplicating a base allows you to create a copy of an existing base, including its tables and structure. This feature is particularly useful for creating backups, testing, or setting up a similar environment with slight modifications.

## Steps to Duplicate a Base

### 1. Access the Base

- **Navigate to the Base**: Go to the base you wish to duplicate. Ensure that the base contains the structure and data you want to replicate.

### 2. Initiate the Duplication

- **Duplicate Option**: Find the option to duplicate the base, usually available in the base's settings or context menu. Click on this option to start the duplication process.

### 3. Configure the Duplication

- **Input New Name**: You will be prompted to enter a new name for the duplicated base. This allows you to easily identify the new base in your workspace.

- **Import Data**: You can choose whether to import the data from the original base into the new base. If you select this option, all tables and records from the original base will be copied to the new base.

- **System Fields Update**: During the duplication, system fields such as `createdBy`, `createdAt`, `updatedBy`, and `updatedAt` will be automatically updated. The `createdBy` and `updatedBy` fields will reflect the user performing the duplication, and `createdAt` and `updatedAt` will be set to the current time.

### 4. Data and Structure Replication

- **Data Copying**: If you chose to import data, all tables and records from the original base will be included in the new base. This includes all fields, values, and configurations within those tables.

- **Reference Fields**: If the original base contains tables with reference fields (columns that link to other tables), new columns will be created in the related tables to maintain these relationships. This ensures that the data integrity and relationships are preserved in the duplicated base.

### 5. Review the Duplicated Base

- **New Base**: After the duplication process is complete, the new base will appear in your workspace with the specified name. You can then proceed to modify or use this base as needed.

## Summary

Duplicating a base in **undb** is a powerful feature that allows you to replicate entire data structures and their contents. With options to rename the base and decide whether to import existing data, this feature is essential for managing complex data operations, creating backups, or setting up new projects based on existing ones. System fields are automatically updated during duplication to ensure accurate tracking of data history.
