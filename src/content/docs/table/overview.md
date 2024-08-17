---
title: Table overview
sidebar:
  order: 1
---

# Understanding Tables

In **undb**, a **Table** is the fundamental structure where your data is stored and managed. Each Table consists of multiple fields and is backed by a robust SQLite database, ensuring that your data operations are both efficient and reliable.

## Key Features of Tables

### Unique Naming

- **No Duplicate Names**: Each Table within a Base must have a unique name. This helps in avoiding confusion and ensures that each Table can be easily identified and referenced within the Base.

<div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  Table name should not contain special characters or spaces.
</div>

### Structure and Storage

- **Fields Collection**: A Table is essentially a collection of fields, where each field represents a specific type of data, such as text, numbers, dates, or other data types.
- **SQLite-Powered**: Under the hood, each Table is stored as an SQLite table, giving you the power and flexibility of a fully functional relational database.
- **Unique Table Names**: Within a single Base, all Tables must have unique names. This prevents confusion and ensures that each Table is easily identifiable.

### Database Operations

Tables in **undb** support a variety of powerful database operations, allowing you to manipulate and analyze your data effectively:

- **Filtering**: You can apply filters to your Tables to view only the data that meets certain criteria. This is useful for focusing on specific subsets of your data.
- **Sorting**: Tables allow you to sort your data based on one or more fields, making it easier to organize and review your information.
- **Selecting**: Execute select operations to retrieve specific data from your Table, enabling more complex queries and data manipulation.

### Views

Each Table in **undb** can have multiple **Views**:

- **Customized Views**: A View is a customized perspective of your Table’s data. Each View can have its own set of filters, sorting options, and other configurations.
- **Manage Views**: You can create, modify, and manage different Views to suit various needs or workflows within your project.

### Importing Data

- **Data Import**: **undb** supports importing data into your Tables from various sources. This feature allows you to integrate external data into your project seamlessly, making it part of your **undb** environment.

## Managing Your Table

- **Creating Fields**: When setting up a new Table, you can define the fields that will hold your data, customizing each field according to the type of information it will store.
- **Executing Operations**: Use the built-in tools to filter, sort, and select data within your Tables, leveraging the full power of SQLite.
- **Customizing Views**: Set up different Views to display your data in various ways, tailored to the specific needs of your project or workflow.
- **Importing Data**: Easily import data into your Tables, expanding the dataset you’re working with and integrating external information smoothly.

By understanding and utilizing Tables in **undb**, you can efficiently manage your data, ensuring that it’s well-organized, accessible, and fully customizable to your needs.
