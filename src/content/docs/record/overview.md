---
title: Record overview
sidebar:
  order: 1
---

In **undb**, a **Record** is the fundamental unit of data within a table. Each record represents a single entry and is composed of various fields defined by the table's schema. These fields dictate what kind of data each record can contain, making records versatile and essential for data management in **undb**.

## Structure of a Record

A record in **undb** is structured based on the fields configured in the table. These fields can include different data types such as strings, numbers, dates, and more. Each field represents a specific piece of data within the record, and the combination of these fields forms the complete data entry.

### Key Components:

- **Fields**: The basic elements that make up a record, each field corresponds to a column in traditional databases. The field types and constraints are defined when the table is set up, guiding how data is entered and stored.

- **System Fields**: By default, each record includes system fields like `id`, `createdAt`, `updatedAt`, and others that help manage and track the record's lifecycle.

## Managing Records

### Creating Records

Records are created by entering data into the fields as defined by the table's schema. This can be done manually through the **undb** interface or programmatically via the API. The process of creating a record is straightforward, ensuring that all necessary data is captured and stored according to the predefined structure.

### Editing Records

Existing records can be edited to update or correct the data they contain. This is done by modifying the values in the fields while respecting any constraints or rules that have been applied. Editing records is crucial for maintaining accurate and up-to-date information.

### Deleting Records

Records can be deleted when they are no longer needed. Deletion helps keep the data set relevant and manageable. In **undb**, deleting a record is a simple action that permanently removes the entry from the table.

## Understanding Record Relationships

Records in different tables can be related to each other using reference fields. These relationships allow for the creation of complex data structures and enable powerful querying and reporting capabilities within **undb**. Understanding how records relate to one another is key to designing effective databases.

## Conclusion

Records are the backbone of data management in **undb**. They encapsulate individual pieces of data within a table and are defined by the fields configured in the table schema. Whether you're creating, editing, or deleting records, **undb** provides a flexible and powerful platform for managing your data.
