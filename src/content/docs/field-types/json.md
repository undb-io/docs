---
title: JSON
sidebar:
  order: 10
---

In **undb**, the **JSON** type field is designed to store structured data in the form of JSON (JavaScript Object Notation). This field type is ideal for scenarios where you need to store complex data structures, such as objects or arrays, directly within your records.

## Key Features of JSON Type

### 1. Structured Data Storage

- **JSON Format**: The JSON field allows you to store data in a flexible, structured format that can represent nested objects, arrays, and key-value pairs. This is useful for capturing complex data relationships or configurations directly within a single field.

### 2. Flexibility

- **Dynamic Content**: The JSON field can store any valid JSON object, providing immense flexibility in how data is structured and used. This could include configurations, metadata, user settings, or any other data that benefits from being stored in a nested format.

### 3. Constraints

- **JSON Validation**: **undb** ensures that only valid JSON content can be stored in this field, helping to prevent data entry errors and maintain the integrity of the stored data.
- **Schema Constraints**: While JSON is inherently flexible, you can impose certain schema constraints if needed, such as requiring specific keys or value types, to ensure consistency across records.

### 4. Default Value

- **Setting a Default JSON Object**: You can define a default JSON structure that will populate the field when a new record is created. This is useful for initializing records with a standard configuration or template.

### 5. Use Cases

- **Configurations**: Store complex configuration settings or parameters as a JSON object, making it easy to update and manage within your records.
- **Metadata**: Capture detailed metadata about records, such as user preferences, audit logs, or system states, in a structured format.
- **Dynamic Forms**: Store dynamic form data or user inputs that may vary greatly in structure from one record to another.

By using the JSON type field in **undb**, you can store and manage complex, structured data within your tables, allowing for greater flexibility and depth in how your data is represented and utilized.
