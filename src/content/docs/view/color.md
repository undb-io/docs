---
title: View color
sidebar:
  order: 3
---

In **undb**, the **View Color** feature allows you to visually distinguish rows in a grid view based on specific conditions. This feature enhances the readability of your data by highlighting rows that meet certain criteria with a color bar.

## Key Features of View Color

### 1. Conditional Coloring

- **Color Based on Conditions**: The View Color feature uses conditions to determine which rows should be highlighted with a specific color. For example, you can configure a condition to highlight overdue tasks in red or high-priority items in yellow.

- **Color Bar Display**: In grid view, the color is displayed as a bar in front of the row, making it easy to quickly identify records that meet the specified conditions.

### 2. Simple Condition Matching

- **Single Condition Application**: Unlike other uses of conditions in **undb**, the View Color feature does not support grouped conditions. This means that you cannot combine multiple conditions using "and" or "or" to determine the color. Each color is applied based on a single, standalone condition.

### 3. Priority of Conditions

- **First Matching Condition**: If a row matches multiple color conditions, only the color of the first matching condition in the configuration will be applied. This means that conditions should be ordered by priority, with the most important condition placed first.

### 4. Use Cases

- **Task Highlighting**: Use View Color to highlight tasks based on their urgency, such as displaying tasks due today in orange and overdue tasks in red.
- **Sales Tracking**: Highlight high-value sales or important clients with specific colors to quickly identify key records in your data.
- **Inventory Management**: Use color to flag low-stock items or items that need to be reordered, helping to manage inventory effectively.

### 5. Easy Configuration

- **Configuring Colors**: Setting up View Color is straightforward. You simply define the condition for each color and assign a color to it. The system then applies the color to rows that match the condition, according to the order of the conditions.

## Summary

The **View Color** feature in **undb** provides a visual way to enhance data presentation by applying colors to rows based on specific conditions. While it supports simple, single-condition matching, it allows for clear prioritization and effective highlighting of key data.
