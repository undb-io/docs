---
title: 'Kanban View'
description: 'The Kanban view in the `undb` platform provides an intuitive way to visualize records in a table by organizing them into columns based on a `select` field. Each option in the `select` field represents a different column in the Kanban view, making it ideal for managing workflows.'
sidebar:
  order: 9
---

## Undb Kanban View Documentation

### Introduction

The Kanban view in the `undb` platform provides an intuitive way to visualize records in a table by organizing them into columns based on a `select` field. Each option in the `select` field represents a different column in the Kanban view, making it ideal for managing workflows.

### Configuration Steps

1. **Select a Table**: Open a table that contains a `select` field. Make sure this `select` field is configured as a **single-select** type, as the Kanban view does not support multi-select fields for column distinction.

2. **Create a Kanban View**:

   - Click on the "Add View" tbutton at the top of the page.
   - In the pop-up window, select "Kanban View" as the view type.
   - Name the view and click "Create."

3. **Select a Grouping Field**:

   - In the Kanban view settings, choose the single-select field you want to use to group records. Each option in this field will correspond to a different column (lane) in the Kanban board.
   - For example, if your `select` field is named "Status" and contains options like "To Do," "In Progress," and "Done," the Kanban view will show three columns for each of these statuses.

4. **Drag and Update Records**:

   - In the Kanban view, you can drag record cards between different columns to update the value of the `select` field. After you move a record to a new column, the value of its `select` field will automatically update to match the column.
   - For instance, moving a record from the "To Do" column to the "Done" column will update the `select` field of that record to "Done."

5. **Customize the View**:
   - You can further customize the Kanban view by adjusting the fields displayed on the record cards, sorting the records, and applying filters.

### Limitations

- The Kanban view currently only supports **single-select** fields for column grouping. Multi-select fields cannot be used to define Kanban columns.
- If the `select` field has no options defined, the Kanban view cannot be created.

### Use Cases

- **Task Management**: Use the Kanban view to manage tasks by status (e.g., "To Do," "In Progress," "Done") for project tracking.
- **Ticket Categorization**: Customer support teams can categorize and manage tickets based on priority, status, or assignee.

The Kanban view in `undb` provides a visual way to manage workflows, making it easier for teams or individuals to stay organized and track progress across different stages.
