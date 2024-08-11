---
title: Reference
sidebar:
  order: 12
---

In **undb**, the **Reference** type field is a powerful feature that allows you to establish relationships between records across different tables. This field type is essential for creating complex data models, enabling you to link related data in meaningful ways and facilitating more organized and interconnected datasets.

## Key Features of Reference Type

### 1. Cross-Table Associations

- **Linking Records**: The Reference field enables you to link records from one table to records in another table. For example, you can link an "Orders" table to a "Customers" table, allowing each order to be associated with a specific customer. This linkage is fundamental for relational data modeling and ensures that related data is easily accessible.

### 2. Multi-Select by Default

- **Multiple Associations**: By default, the Reference field supports multi-select, meaning you can associate a single record with multiple records from the referenced table. For instance, a project record can be associated with multiple task records, or an order can be linked to multiple products.

### 3. Configuring the Reference Field

When setting up a Reference field, you have several options to customize how the relationships are established:

- **Selecting the Target Table**:

  - When you create a Reference field, you begin by choosing which table you want to link to. This target table will contain the records that you can associate with your current table.

- **Selecting Specific Records**:
  - After choosing the target table, you can specify which records from that table should be available for selection. This can be done dynamically, allowing users to select records as needed, or can be predefined based on certain criteria or relationships.

### 4. Symmetric Relationships

- **Automatic Symmetric Field Creation**:
  - When you create a Reference field in one table, **undb** automatically generates a corresponding symmetric field in the referenced table. This means that if you link Table A to Table B, a field will also be created in Table B that links back to Table A. This symmetric relationship ensures that associations are bidirectional and consistent across your data model.
  - **Field Naming**: The symmetric field in the referenced table is automatically named based on the original table's name, making it easy to understand and manage these reverse relationships.

### 5. Managing Relationships

The Reference field allows you to manage and navigate complex relationships within your data:

- **Parent-Child Relationships**:

  - Reference fields can be used to establish parent-child relationships, such as linking a "Project" (parent) to multiple "Tasks" (children). The symmetric field in the "Tasks" table will then link back to the "Project."

- **Many-to-Many Relationships**:
  - You can also model many-to-many relationships using Reference fields. For example, linking "Students" to "Courses" where each student can enroll in multiple courses and each course can have multiple students. The symmetric fields ensure that these associations are accurately reflected in both directions.

### 6. Use Cases

- **Project Management**: Link projects to tasks and team members, ensuring that all related data is interconnected and easily accessible.
- **Order Tracking**: Associate orders with customers and products, creating a comprehensive view of order history and product inventory.
- **Educational Records**: Connect students to classes, assignments, and grades, facilitating easy management of academic records.

By utilizing the Reference type field in **undb**, you can create robust, interconnected data models that ensure all relevant data is linked and accessible from any related record.
