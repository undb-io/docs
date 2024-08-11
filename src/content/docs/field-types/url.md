---
title: URL
sidebar:
  order: 4
---

In **undb**, the **URL** type field is designed to store web addresses, ensuring that only valid URLs are entered. This field is essential for linking to external resources, websites, or any other web-based content.

## Key Features of URL Type

### 1. URL Storage

- **Web Address Format**: The URL field is specifically formatted to store web addresses. This ensures that only valid URLs (e.g., `https://example.com`) can be entered into this field.

### 2. Constraints

The URL type field in **undb** includes constraints to ensure the validity and appropriateness of the stored data:

- **Required**: You can specify whether the URL field is mandatory. If set as required, every record must include a valid URL in this field.
- **Maximum Length**: URLs can vary in length, but you can set a maximum character limit if needed to fit specific database requirements or application constraints.
- **Minimum Length**: Set a minimum length to ensure that entries meet a baseline character count, which can be useful for ensuring the URL is fully formed.

### 3. Default Value

- **Setting a Default Value**: If there is a common URL that should be used by default, such as a company website or a frequently referenced resource, you can set this as the default value for the field.

### 4. Validation

- **URL Validation**: The system automatically validates the URL format, ensuring that only properly formatted web addresses are accepted. This helps maintain the integrity of your data and ensures that the links are functional.

## Use Cases

- **Website Links**: Store links to external websites, product pages, or resources.
- **Media Resources**: Capture URLs for images, videos, or other media hosted online.
- **Reference Links**: Use for referencing external documents, articles, or any online content related to your data.

By utilizing the URL type field in **undb**, you can ensure that your Tables effectively manage and validate web addresses, enhancing the connectivity and usefulness of your data within your application.
