---
title: Date Range
sidebar:
  order: 8.1
---

# Date Range Field Documentation

In undb, the Date Range Field is a powerful field type that allows users to select and manage a range of dates, specifying both start and end dates. This feature is ideal for scenarios that require time-bound data, such as project timelines, task scheduling, and event tracking. Below is a comprehensive guide on how to use and configure the Date Range Field.

## 1. Creating a Date Range Field

To create a Date Range Field within a table:

1. Open the table where you want to add the Date Range Field
2. In the field management interface, click the "Add Field" button
3. Choose Date Range from the field type options
4. Configure the field name, then save your changes

> **Note**: The Date Range Field requires both a start date and an end date, with the end date not allowed to be earlier than the start date.

## 2. Configuring Date Range Format

The Date Range field supports various format options to meet different needs:

### Date Format Options


- **YYYY-MM-DD**: 2024-03-21
- **MM/DD/YYYY**: 03/21/2024
- **DD/MM/YYYY**: 21/03/2024

### Time Options

- Option to include or exclude time information
- When time is enabled, precision down to hours and minutes
- Support for both 24-hour and 12-hour time formats

### Date Macros

The Date Range field supports the following built-in macros for dynamic date values:

<img src="/imgs/field/date/date-macros.png" alt="date macros" />

- **@now**: Sets the field to the current date and time
- **@today**: Sets the field to the current date (start of day)
- **@tomorrow**: Sets the field to tomorrow's date
- **@yesterday**: Sets the field to yesterday's date

These macros are particularly useful when setting default values or needing to reference current time or relative dates.

## 3. Using the Date Range Field

The Date Range Field appears in each record as two date pickers for selecting the start and end dates:

1. Select the Start Date: Click on the start date picker and choose the desired start date
2. Select the End Date: Click on the end date picker and choose the desired end date
3. Save the Record: Once the date range is selected, save the record to confirm the chosen time range in the Date Range Field

## 4. Use Cases for the Date Range Field

The Date Range Field is versatile and ideal for managing time-sensitive data across various scenarios:

- Project Timelines: Track the start and end dates for each project phase
- Task Scheduling

By providing a flexible way to manage time ranges, the Date Range Field helps users keep their data well-organized and time-bound, bringing clarity to scheduling and planning activities.