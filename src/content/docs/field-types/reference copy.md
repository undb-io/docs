---
title: Rollup
sidebar:
  order: 14
---

# Rollup Type Field

In **undb**, the **Rollup** type field is designed to perform calculations or lookups based on data from a referenced table. This field type allows you to aggregate or retrieve data from related records, enabling you to derive meaningful insights and summaries directly within your table.

## Key Features of Rollup Type

### 1. Working with Referenced Data

- **Reference-Based Calculation**: The Rollup field leverages existing Reference fields to aggregate or lookup data from linked records in another table. This allows you to summarize or extract specific information from related data without manually entering or updating values.

### 2. Selecting Fields and Functions

- **Choosing a Target Field**: When setting up a Rollup field, you first select the Reference field that links to another table. Then, you choose a specific column from the referenced table on which the Rollup will operate.

- **Aggregation and Lookup Functions**: Depending on the type of data in the selected field, you can choose from various functions:
  - **String Fields**: For string data, you can use lookup functions to retrieve and display the relevant text. For example, you might concatenate values or list all related strings.
  - **Numeric Fields**: For numeric data, you can apply aggregation functions such as:
    - **Sum**: Adds up all the numeric values from the related records.
    - **Max**: Finds the maximum value among the related records.
    - **Min**: Finds the minimum value among the related records.
    - **Average (Avg)**: Calculates the average of the numeric values from the related records.
  - **Other Data Types**: Depending on the field type, additional functions might be available, such as counting records or extracting specific dates.

### 3. Dynamic Updates

- **Automatic Calculation**: Rollup fields automatically recalculate whenever the related records are updated. This ensures that the Rollup field always reflects the most current data, saving time and reducing the risk of errors from manual calculations.

### 4. Use Cases

- **Financial Summaries**: Use Rollup fields to calculate total sales, average order value, or highest transaction amounts by aggregating data from related order or transaction records.
- **Progress Tracking**: Track the completion percentage of tasks within a project by calculating the ratio of completed tasks to total tasks.
- **Data Retrieval**: Easily pull in and display related information, such as listing all the items associated with an order or all comments related to a project.

By utilizing the Rollup type field in **undb**, you can efficiently summarize and extract meaningful data from related records, enabling more powerful data analysis and reporting within your tables.
