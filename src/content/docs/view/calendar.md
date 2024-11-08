---
title: 'Calendar View'
description: 'The Calendar view in the `undb` platform provides an intuitive way to visualize records in a table by displaying them as a calendar.'
sidebar:
  order: 9.3
---

# Calendar View Documentation

In undb, the Calendar View is designed to display records in a calendar layout, providing a clear and organized way to visualize date-based data. This view is particularly useful for managing and tracking data with scheduled or time-bound entries, such as tasks, events, or deadlines. Below is a comprehensive guide on how to create and configure a Calendar View in undb.

<img src="/imgs/view/calendar/calendar.jpeg" alt="Calendar View" />

## 1. Creating a Calendar View

To create a Calendar View in undb, follow these steps:

1. Open the table that contains at least one date field
2. Click the "Add View" button in the top navigation bar
3. Select Calendar View from the options, name the view, and save it

> **Note**: The Calendar View is available only if the table contains at least one date field.

## 2. Configuring the Date Field

After creating the Calendar View, select a date field to display records on the calendar. Here's how to configure it:

1. Open the settings panel for the Calendar View
2. In the "Date Field" section, choose a date field from your records as the primary field for display
   - If a record contains multiple date fields, you can switch between them in the calendar to display different dates
3. Once configured, the view will automatically refresh to show records based on the selected date field

## 3. Display and Navigation

The Calendar View provides a streamlined interface to view and navigate records by date. You can:

1. Switch between month, week, or day views to get a broader or more detailed look at the scheduled entries
2. Click on a date to view all records associated with that specific date
3. Drag-and-drop records to new dates to quickly update the date field (if enabled)

The Calendar View is ideal for users needing an organized, time-based perspective on their data, facilitating better scheduling and task management within undb.