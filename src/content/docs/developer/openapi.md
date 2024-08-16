---
title: Open API
sidebar:
  order: 1
---

In **undb**, the **OpenAPI** feature provides a detailed specification for interacting with your tables programmatically. This allows developers to seamlessly integrate **undb** tables with external applications and services using standard RESTful APIs.

## Accessing the OpenAPI Documentation

### 1. General API Documentation

- **URL**: To access the general API documentation, navigate to `app.undb.io/openapi`. This documentation provides the necessary details to perform various operations on records within your tables.

- **Base and Table Names**: The API primarily requires you to know the `base name` and `table name` to perform operations. With these two pieces of information, you can execute various actions such as creating, reading, updating, and deleting records within the specified table.

### 2. Differences from Table-Specific OpenAPI

- **General vs. Table-Specific**: The documentation at `app.undb.io/openapi` is more general and does not include the schema-specific type definitions that are available in the table-specific OpenAPI documentation.

- **Developer Tab OpenAPI**: Within each table in **undb**, there is a **Developer** tab that provides a more detailed OpenAPI documentation specific to that table. This documentation includes schema definitions, detailing the types and constraints of each field in the table, making it easier to understand the exact structure and requirements when interacting with that table's data programmatically.

## Accessing Table OpenAPI

### 1. Viewing the OpenAPI Specification

- **Developer Tab**: To access the OpenAPI specification for a specific table, navigate to the **Developer** tab within the **undb** interface.
- **OpenAPI Option**: Select the **OpenAPI** option to view the API documentation that is automatically generated for the current table.

### 2. Automatic Generation

- **Schema-Based Paths**: The OpenAPI specification is automatically generated based on the schema of the table. This includes paths for creating, reading, updating, and deleting records, as well as batch operations and subscription endpoints.

## Key Features of OpenAPI

### 1. CRUD Operations

- **Create, Read, Update, Delete**: The OpenAPI includes endpoints for all basic CRUD operations on the table. Each operation is mapped to the relevant HTTP methods (`POST`, `GET`, `PUT`, `DELETE`), and the request and response bodies are tailored to the table's schema.

### 2. Batch Operations

- **Batch Endpoints**: In addition to individual record operations, the OpenAPI also provides endpoints for batch operations. This allows you to create, update, or delete multiple records in a single request, improving efficiency for large-scale data management.

### 3. Subscription Endpoints

- **Real-Time Updates**: The OpenAPI includes subscription endpoints that allow you to subscribe to changes in the table. This is useful for applications that need to stay up-to-date with the latest data changes without polling the API repeatedly.

### 4. Schema-Driven API

- **Dynamic Schema Mapping**: The paths, parameters, and results in the OpenAPI are dynamically generated based on the table's schema:
  - **Field Representation**: If your table includes a `title` field of type `string`, the OpenAPI will include `title` as part of the response schema for GET requests.
  - **User Select Fields**: For fields that use IDs, such as user select fields, the API response will include `displayValues` to represent the actual values in a human-readable format.

### 5. Customization and Flexibility

- **Endpoint Flexibility**: The OpenAPI specification in **undb** is flexible, allowing developers to tailor their requests to match the specific needs of their applications. This flexibility ensures that the API can be easily integrated into various external systems.

## Use Cases

- **Integration with External Systems**: Use the OpenAPI to integrate **undb** tables with other platforms, such as CRMs, ERPs, or custom applications.
- **Automation**: Automate data entry, updates, and management tasks by programmatically interacting with **undb** tables through the API.
- **Real-Time Data Sync**: Keep external applications in sync with **undb** data by using subscription endpoints to receive real-time updates.

## Summary

The **OpenAPI** feature in **undb** provides a comprehensive and automatically generated API specification that allows developers to interact with table data programmatically. With support for CRUD operations, batch processing, and real-time subscriptions, the OpenAPI is a powerful tool for integrating **undb** with external applications and automating workflows.
