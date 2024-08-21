---
title: Email
sidebar:
  order: 4
---

In **undb**, the **Email** type field is specifically designed to store email addresses. This field type ensures that the data entered conforms to the standard format of an email address, which is crucial for communication-related data.

## Key Features of Email Type

### 1. Email Address Storage

- **Valid Email Format**: The Email field is designed to store text data that conforms to the format of an email address (e.g., `example@domain.com`). This ensures that only valid email addresses are entered into the field.

### 2. Constraints

The Email type field in **undb** may include constraints similar to other text-based fields:

- **Required**: You can specify whether the email field is mandatory. If set as required, every record must include a valid email address in this field.

### 3. Default Value

- **Setting a Default Value**: If there is a common or placeholder email address that should be used by default, you can set this as the default value for the field. This is particularly useful for cases where a generic email might be applicable.

### 4. Validation

- **Email Validation**: The system automatically validates the email format, ensuring that users cannot enter data that does not conform to the expected format of an email address.

## Use Cases

- **User Contact Information**: Store user email addresses for account management or communication purposes.
- **Customer Support**: Capture and manage customer support contact emails.
- **Subscription Services**: Manage email lists for newsletters, updates, or other subscription-based services.

By using the Email type field in **undb**, you can ensure that your Tables store valid email addresses, facilitating effective communication and data integrity within your application.
