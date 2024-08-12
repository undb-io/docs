---
title: Condition
sidebar:
  order: 5
---

In **undb**, a **Condition** is a powerful logical tool used to filter, match, and operate on data based on specific criteria. Conditions can be grouped and nested, allowing for complex and flexible data operations.

## Use Cases

### 1. Row Filtering in Views

- **Row Filtering**: In views, conditions are used to filter and display only the records that meet specific criteria. This allows you to focus on the most relevant data, improving efficiency. For example, you might create a condition to display only tasks with a status of "Completed" or records updated within the last 30 days.

### 2. Conditional Color Coding

- **Color Coding**: Conditions can be applied to set color rules in a view, automatically applying specific colors to rows or fields based on the data that meets certain conditions. This helps you quickly identify important information or status changes, such as marking tasks that are nearing their due date in red.

### 3. Webhook Condition Matching

- **Webhook Triggers**: Conditions can be used to trigger webhooks based on specific criteria. When a record meets a defined condition, an automated webhook action can be triggered, such as sending a notification or updating data in an external system. This enables automated workflows based on data changes.

### 4. Reference Filtering

- **Reference Filtering**: When using reference fields, conditions can be used to filter related records. This allows you to display or associate only the data that meets certain criteria from another table, enabling more precise data linking and presentation.

### 5. Form Logic

- **Form Logic**: In forms, conditions can control the display and behavior of form fields. Based on user input, you can dynamically show or hide form fields or validate whether the entered data meets specific criteria. This makes forms more intelligent and user-friendly.

### 6. Grouping Conditions

- **Nested Conditions**: Conditions can be grouped and nested, allowing for complex logic to be applied to your data. Groups of conditions can be linked using "and" or "or" conjunctions, providing greater flexibility in how conditions are applied. For example, you can create a condition group that filters tasks based on both priority and status, or you can use nested conditions to filter records that meet either one of several criteria.

## Summary

**Condition** is a core logical tool in **undb** that provides powerful control over data behavior and display across different scenarios. With the ability to group and nest conditions using "and" or "or" conjunctions, conditions offer users a flexible way to manage and interact with their data in a highly customized manner.
