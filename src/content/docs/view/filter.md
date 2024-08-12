---
title: View filter
sidebar:
  order: 2
---

In **undb**, the **View Filter** feature allows you to dynamically query and display rows that match specific criteria within your tables. This functionality is built upon the **Condition** system, enabling you to create complex and powerful filters that can be applied to your data views.

## Key Features of View Filter

### 1. Querying Matching Rows

- **Dynamic Filtering**: The View Filter feature enables you to filter records based on defined conditions. This is particularly useful for managing large datasets, where you may only need to focus on specific subsets of data. For example, you can create filters to display only rows where the status is "Active" or where a date field falls within the past 30 days.

- **Real-Time Filtering**: Filters are applied in real-time, meaning that as you adjust your conditions, the data view updates immediately to reflect the changes. This provides a dynamic and interactive way to explore your data.

### 2. Utilizing Conditions

- **Condition-Based Filtering**: View Filters leverage the **Condition** system, allowing you to build filters using a combination of fields, operations, and values. You can create simple filters with one condition or more complex filters by grouping multiple conditions together.

- **Grouping Conditions**: You can group conditions using "and" or "or" conjunctions, allowing for more sophisticated queries. For instance, you could filter for rows where the status is "Completed" _and_ the priority is "High," or for rows where the assignee is "John" _or_ "Jane."

### 3. Use Cases

- **Task Management**: Use View Filters to quickly access tasks that are due today, tasks assigned to a specific team member, or tasks that are marked as high priority.
- **Sales Tracking**: Filter sales data to view only the records from the last quarter, sales above a certain threshold, or sales attributed to a specific region or salesperson.
- **Customer Support**: Create filters to display only unresolved support tickets, tickets assigned to a specific agent, or tickets that have been open for more than a week.

### 4. Easy Configuration

- **User-Friendly Interface**: Configuring View Filters is straightforward, with a user-friendly interface that guides you through selecting the fields, operations, and values to create your conditions. The interface supports both simple and advanced configurations, catering to users of all levels.

### 5. Persistent Filters

- **Saving Filters**: Filters applied in a View are persistent, meaning they will remain in place as you navigate through your data, switch between views, or even when you revisit the table at a later time. This ensures that your filtered views are always ready to use.

## Summary

The **View Filter** feature in **undb** provides a powerful and flexible way to query and display data based on specific conditions. By leveraging the robust Condition system, users can create detailed and dynamic filters that enhance data analysis and management.
