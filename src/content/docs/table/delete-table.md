---
title: Delete Table
sidebar:
  order: 4
---

In **undb**, deleting a table is a critical action that permanently removes the table and its data from your workspace. This process also affects any related tables that have reference or rollup fields linked to the deleted table.

## Steps to Delete a Table

### 1. Access the Table

- **Navigate to the Table**: Go to the table you want to delete. Ensure that you no longer need the data or structure in this table, as the deletion is permanent.

### 2. Delete the Table

- **Delete Option**: Locate the option to delete the table, typically found in the table's settings or context menu. Click on this option to initiate the deletion process.

- **Confirmation**: You will be prompted to confirm the deletion. This step ensures that you do not accidentally delete important data.

### 3. Impact on Related Tables

- **Reference Fields**: If the table you are deleting is referenced by another table through a reference field, that reference field will be automatically deleted from the related table. This is necessary to maintain data integrity and prevent orphaned references.

- **Rollup Fields**: If the reference field being deleted is used in a rollup field in another table, that rollup field will also be deleted. Rollup fields depend on the existence of reference fields, so their removal is necessary when the reference field is no longer available.

### 4. Finalize the Deletion

- **Permanent Removal**: Once confirmed, the table and all related reference and rollup fields will be permanently deleted from your workspace.

- **Review**: After deletion, review the remaining tables to ensure that all necessary adjustments have been made, especially in tables that had references to the deleted table.

## Summary

Deleting a table in **undb** is a permanent action that not only removes the table and its data but also impacts related tables. Reference fields in other tables that link to the deleted table will be removed, and any dependent rollup fields will also be deleted. Ensure that you understand these impacts before confirming the deletion.
