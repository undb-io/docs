---
title: Roles and permission
sidebar:
  order: 5
---

Here is the revised document based on the code you provided:

---

## Roles and Permissions in undb

This document outlines the roles and their associated permissions in **undb**. The permissions are categorized by functionality areas, including **Space**, **Base**, **Table**, **Form**, **Field**, **Record**, **Webhook**, **Sharing**, and **Authorization**.

### Space Permissions

| Action             | Owner | Admin | Editor | Viewer |
| ------------------ | :---: | :---: | :----: | :----: |
| List all spaces    |  ✅   |  ✅   |   ✅   |   ✅   |
| Read space details |  ✅   |  ✅   |   ✅   |   ✅   |
| Update space       |  ✅   |  ❌   |   ❌   |   ❌   |
| Delete a space     |  ✅   |  ❌   |   ❌   |   ❌   |

### Base Permissions

| Action            | Owner | Admin | Editor | Viewer |
| ----------------- | :---: | :---: | :----: | :----: |
| Create a base     |  ✅   |  ✅   |   ✅   |   ❌   |
| List all bases    |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a base     |  ✅   |  ✅   |   ❌   |   ❌   |
| Read base details |  ✅   |  ✅   |   ✅   |   ✅   |
| Update a base     |  ✅   |  ✅   |   ✅   |   ❌   |

### Table Permissions

| Action             | Owner | Admin | Editor | Viewer |
| ------------------ | :---: | :---: | :----: | :----: |
| Create a table     |  ✅   |  ✅   |   ✅   |   ❌   |
| List all tables    |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a table     |  ✅   |  ✅   |   ❌   |   ❌   |
| Read table details |  ✅   |  ✅   |   ✅   |   ✅   |
| Update a table     |  ✅   |  ✅   |   ✅   |   ❌   |

### Form Permissions

| Action            | Owner | Admin | Editor | Viewer |
| ----------------- | :---: | :---: | :----: | :----: |
| Create a form     |  ✅   |  ✅   |   ✅   |   ❌   |
| List all forms    |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a form     |  ✅   |  ✅   |   ✅   |   ❌   |
| Read form details |  ✅   |  ✅   |   ✅   |   ✅   |
| Update a form     |  ✅   |  ✅   |   ✅   |   ❌   |

### Field Permissions

| Action         | Owner | Admin | Editor | Viewer |
| -------------- | :---: | :---: | :----: | :----: |
| Create a field |  ✅   |  ✅   |   ❌   |   ❌   |
| Update a field |  ✅   |  ✅   |   ❌   |   ❌   |
| Delete a field |  ✅   |  ✅   |   ❌   |   ❌   |

### Record Permissions

| Action              | Owner | Admin | Editor | Viewer |
| ------------------- | :---: | :---: | :----: | :----: |
| Create a record     |  ✅   |  ✅   |   ✅   |   ❌   |
| List all records    |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a record     |  ✅   |  ✅   |   ✅   |   ❌   |
| Read record details |  ✅   |  ✅   |   ✅   |   ✅   |
| Update a record     |  ✅   |  ✅   |   ✅   |   ❌   |
| Download record     |  ✅   |  ✅   |   ✅   |   ❌   |

### Webhook Permissions

| Action            | Owner | Admin | Editor | Viewer |
| ----------------- | :---: | :---: | :----: | :----: |
| Create a webhook  |  ✅   |  ✅   |   ✅   |   ❌   |
| Update a webhook  |  ✅   |  ✅   |   ✅   |   ❌   |
| Delete a webhook  |  ✅   |  ✅   |   ❌   |   ❌   |
| List all webhooks |  ✅   |  ✅   |   ✅   |   ✅   |

### Sharing Permissions

| Action               | Owner | Admin | Editor | Viewer |
| -------------------- | :---: | :---: | :----: | :----: |
| Disable sharing      |  ✅   |  ✅   |   ✅   |   ❌   |
| View sharing options |  ✅   |  ✅   |   ❌   |   ❌   |
| Share table          |  ✅   |  ✅   |   ❌   |   ❌   |
| Share base           |  ✅   |  ✅   |   ❌   |   ❌   |
| Share form           |  ✅   |  ✅   |   ✅   |   ❌   |

### Authorization Permissions

| Action               | Owner | Admin | Editor | Viewer |
| -------------------- | :---: | :---: | :----: | :----: |
| Invite users         |  ✅   |  ✅   |   ✅   |   ✅   |
| List all invitations |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete an invitation |  ✅   |  ✅   |   ❌   |   ❌   |

---

This updated document reflects the structure and permissions defined in the code snippet provided.
