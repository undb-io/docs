---
title: User
sidebar:
  order: 12
---

In **undb**, the **User** type field is designed to associate records with users within your system. This field type supports both single-select and multi-select configurations, allowing you to link one or more users to a specific record.

## Key Features of User Type

### 1. Associating Records with Users

- **User References**: The User field is used to store references to users within your **undb** environment. This is useful for assigning tasks, tracking ownership, or indicating participants in a process.

### 2. Single-Select vs. Multi-Select

- **Single-Select**: In single-select mode, you can assign a record to a single user. This is ideal for scenarios like task assignment, where each task is owned by one user.

- **Multi-Select**: In multi-select mode, you can associate a record with multiple users. This is useful for collaborative projects, teams, or situations where multiple users share responsibility or involvement.

### 3. Constraints and Default Values

- **Required**: You can set the User field as required, meaning that a user must be selected before the record can be saved.
- **Default User**: You can specify a default user or users that will be automatically selected when a new record is created. This is useful for fields where a specific user or group is commonly associated with new records.
- **Maximum and Minimum Selections**: When using the multi-select configuration, you can set constraints on the minimum and maximum number of users that can be selected.

### 4. Macro Support

<img src="/imgs/field/user/user-macros.png" alt="user macros" />

- **@me Macro**: The User field supports the special `@me` macro, which automatically references the currently logged-in user. This is particularly useful for:
  - Creating filters that show records assigned to the current user
  - Setting default values to automatically assign new records to the current user
  - Simplifying user selection in forms and views

### 5. Use Cases

- **Task Assignment**: Use the User field to assign tasks or responsibilities to individual users.
- **Team Collaboration**: Link multiple users to a project or record to indicate team involvement or shared responsibility.
- **Record Ownership**: Track who owns or is responsible for specific records, such as documents, tasks, or customer accounts.

By utilizing the User type field in **undb**, you can effectively manage associations between records and users, ensuring clarity in roles, responsibilities, and collaboration within your system.
