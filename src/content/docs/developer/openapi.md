---
title: Open API
sidebar:
  order: 1
---

# Open API

In **undb**, the **OpenAPI** feature provides a detailed specification for interacting with your tables and forms programmatically. This allows developers to seamlessly integrate **undb** tables and forms with external applications and services using standard RESTful APIs.

## Accessing the OpenAPI Documentation

<img src="/imgs/openapi.png" alt="OpenAPI" />

<hr />

### 1. General API Documentation

- **URL**: To access the general API documentation, navigate to `app.undb.io/openapi`. This documentation provides the necessary details to perform various operations on records and forms within your tables.

- **Base and Table Names**: The API primarily requires you to know the `base name` and `table name` to perform operations. For forms, you will also need the `form name`. With this information, you can execute actions like submitting a form, creating, reading, updating, and deleting records within the specified table.

### 2. Differences from Table-Specific OpenAPI

- **General vs. Table-Specific**: The documentation at `app.undb.io/openapi` is more general and does not include the schema-specific type definitions that are available in the table-specific OpenAPI documentation.

<img src="/imgs/openapi-general.png" alt="OpenAPI" />

<hr />

- **Developer Tab OpenAPI**: Within each table in **undb**, there is a **Developer** tab that provides a more detailed OpenAPI documentation specific to that table. This documentation includes schema definitions, detailing the types and constraints of each field in the table, including forms. This makes it easier to understand the exact structure and requirements when interacting with a specific table's data programmatically.

<img src="/imgs/openapi-table.png" alt="OpenAPI" />

<hr />

## Accessing Table and Form OpenAPI

### 1. Viewing the OpenAPI Specification

- **Developer Tab**: To access the OpenAPI specification for a specific table and its forms, navigate to the **Developer** tab within the **undb** interface.
- **OpenAPI Option**: Select the **OpenAPI** option to view the API documentation that is automatically generated for the current table and form.

### 2. Automatic Generation

- **Schema-Based Paths**: The OpenAPI specification is automatically generated based on the schema of the table and forms. This includes paths for creating, reading, updating, and deleting records, as well as submitting forms, batch operations, and subscription endpoints.

### 3. Form Submission Endpoint

- **Form Submission**: To submit a form programmatically, **undb** provides the following endpoint:

  ```bash
  POST /bases/{baseName}/tables/{tableName}/form/{formName}/submit
  ```

  This endpoint allows you to submit a form by providing the `base name`, `table name`, and `form name`. The request body should contain only the fields that are part of the form, respecting any `required`, `hidden`, or `optional` configurations set in the form schema.

  - **Required Fields**: OpenAPI enforces required fields, ensuring that submissions cannot be made without providing the necessary data.
  - **Hidden Fields**: Hidden fields are automatically excluded from the submission request, ensuring that only the visible fields are processed.
  - **Type Safety**: The endpoint ensures type safety, validating field types according to the form schema.

  Here is an example of how to submit a form:

  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
  ```

  In this example, only the fields visible on the form are submitted, even if the form contains many other fields. The OpenAPI respects form configurations such as required and hidden fields, ensuring efficient and accurate submissions.

### 4. View-Specific Endpoints

- **Filter and Sort by Views**: In addition to general CRUD operations, the OpenAPI supports view-specific endpoints. These endpoints allow you to fetch records filtered and sorted according to the specific settings of a view.

  ```bash
  GET /bases/{baseName}/tables/{tableName}/views/{viewName}/records
  ```

  This endpoint returns records from the specified view, adhering to the filter and sort configurations set within that view.

## Key Features of OpenAPI

### 1. CRUD Operations

- **Create, Read, Update, Delete**: The OpenAPI includes endpoints for all basic CRUD operations on the table. Each operation is mapped to the relevant HTTP methods (`POST`, `GET`, `PUT`, `DELETE`), and the request and response bodies are tailored to the table's schema.

### 2. Form Submission

- **Submit Forms**: The OpenAPI includes a dedicated endpoint for form submission (`POST /bases/{baseName}/tables/{tableName}/form/{formName}/submit`). This allows you to submit forms programmatically with automatic validation for required and hidden fields, ensuring that only the fields configured in the form are submitted.

### 3. Batch Operations

- **Batch Endpoints**: In addition to individual record operations, the OpenAPI also provides endpoints for batch operations. This allows you to create, update, or delete multiple records in a single request, improving efficiency for large-scale data management.

### 4. Subscription Endpoints

- **Real-Time Updates**: The OpenAPI includes subscription endpoints that allow you to subscribe to changes in the table. This is useful for applications that need to stay up-to-date with the latest data changes without polling the API repeatedly.

### 5. Button Field

- **Trigger Button Action**: The OpenAPI includes endpoints for triggering button actions. This allows you to programmatically trigger the button's action.

### 6. Schema-Driven API

- **Dynamic Schema Mapping**: The paths, parameters, and results in the OpenAPI are dynamically generated based on the table's schema:
  - **Field Representation**: If your table includes a `title` field of type `string`, the OpenAPI will include `title` as part of the response schema for GET requests.
  - **User Select Fields**: For fields that use IDs, such as user select fields, the API response will include `displayValues` to represent the actual values in a human-readable format.

### 7. Customization and Flexibility

- **Endpoint Flexibility**: The OpenAPI specification in **undb** is flexible, allowing developers to tailor their requests to match the specific needs of their applications. This flexibility ensures that the API can be easily integrated into various external systems.

## Use Cases

- **Form Submissions**: Automate the process of submitting forms programmatically, respecting the form's structure, required fields, and hidden fields. This simplifies integration with external systems where form submission is crucial.
- **Integration with External Systems**: Use the OpenAPI to integrate **undb** tables and forms with other platforms, such as CRMs, ERPs, or custom applications.
- **Automation**: Automate data entry, updates, and management tasks by programmatically interacting with **undb** tables through the API.
- **Real-Time Data Sync**: Keep external applications in sync with **undb** data by using subscription endpoints to receive real-time updates.

## Summary

The **OpenAPI** feature in **undb** provides a comprehensive and automatically generated API specification that allows developers to interact with table and form data programmatically. With support for CRUD operations, form submissions, batch processing, real-time subscriptions, and view-specific endpoints, the OpenAPI is a powerful tool for integrating **undb** with external applications and automating workflows.
