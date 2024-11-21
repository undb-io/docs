---
title: 'Calendar View'
description: 'The Calendar view in the `undb` platform provides an intuitive way to visualize records in a table by displaying them as a calendar.'
sidebar:
  order: 9.3
---

# Calendar View

The calendar view in undb provides a robust solution for managing and visualizing time-based data. This document explains its features, usage, and configuration options in detail.

## 1. Overview

<img src="/imgs/view/calendar/calendar.jpeg" alt="calendar view" />

The calendar view allows users to:
- Visualize records across different time scales
- Create, update, and organize records directly within the calendar
- Filter records using the right-side panel
- Drag and drop records for intuitive scheduling

Supported time scales:
- Month View: Displays a comprehensive monthly overview
- Week View: Focuses on a single week
- Day View: Provides a detailed hourly breakdown for a single day

## 2. Features

### 2.1 Time Scales

<img src="/imgs/view/calendar/calendar-timescale.gif" alt="time scales" />

The calendar supports three levels of granularity:
- Month View: Ideal for long-term planning and identifying trends
- Week View: Suitable for detailed weekly task management
- Day View: Best for precise scheduling of tasks or events

Users can toggle between these views using the navigation bar at the top of the calendar.

### 2.2 Drag-and-Drop Functionality

<img src="/imgs/view/calendar/calendar-dnd.gif" alt="drag and drop" />

The calendar is highly interactive, with support for:
- Moving Records: Drag a record from its current slot to a new date or time
- Creating Records: Drag directly onto a date or time slot to create a new record with pre-filled date and time values
- Dragging from Panel: Drag unassigned records from the right-side panel into the calendar to assign a date and time

## 3. Right-Side Panel

<img src="/imgs/view/calendar/calendar-dnd-panel.gif" alt="right-side panel" />

The right-side panel enhances the user experience by offering:
	•	Record Filters: Choose to view only records within the selected date, without dates, or all records.
	•	Drag-and-Drop Support: Drag records directly into the calendar to assign a date and time.
	•	Quick Access to Record Details: Click on any record in the panel to view or edit its details.

## 4. Configuration and Customization

### 4.1 Setting Up the Calendar View

	1.	Open a table that includes at least one date-based field.
	2.	Switch to the calendar view using the view selector in the navigation bar.
	3.	Select the desired time scale (Month, Week, Day) using the toggle options.

### 4.2 Adding and Managing Records

	•	To Add a Record:
	•	Click on a date or time slot within the calendar, or drag a record from the right-side panel to a desired time slot.
	•	To Update a Record:
	•	Drag a record to a new time slot to update its date and time.
	•	To Delete a Record:
	•	Right-click on a record in the calendar or panel and select “Delete.”

## 5. Benefits and Use Cases

The calendar view is particularly useful for:
	•	Scheduling: Plan meetings, events, or deadlines efficiently.
	•	Task Management: Organize tasks across different time frames and reassign dates with ease.
	•	Unassigned Records: Quickly manage and schedule records without a pre-assigned date.

## FAQ

### Q1: What happens if I drag a record to a new time?
The record's date and time fields will automatically update to reflect the new time slot.

### Q2: Can I filter records by multiple criteria?
Currently, the filtering options are limited to "In Selected Date," "Without Date," and "All Records." Advanced filtering is planned for future updates.

### Q3: Is the calendar view available for all tables?
The calendar view is available for tables with at least one date-based field.

## Notes and Limitations

- Single Date Field: The calendar requires at least one date field to display records
- Filtering: Advanced filters for combining multiple criteria are not yet supported
- Drag-and-Drop Behavior: Drag-and-drop updates the record's associated date/time fields immediately

This documentation provides all the necessary details to understand and use the undb calendar view effectively. For further assistance, please refer to the help center or contact support.