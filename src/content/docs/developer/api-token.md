---
title: Api Token
sidebar:
  order: 2
---

In **undb**, an **API Token** is used to authenticate API requests made through the OpenAPI interface. API tokens are space-specific, meaning that each space within **undb** requires its own token. These tokens ensure that API requests are secure and authorized.

## Creating an API Token

### 1. Access API Token Settings

- **Navigate to Space Settings**: To create an API token, first navigate to the settings of the space for which you want to generate the token.
- **API Token Section**: Locate the **API Token** section within the space settings. This is where you can generate and manage tokens for that specific space.

### 2. Generate the API Token

- **Create New Token**: Click on the option to create a new API token. This will generate a unique token that you can use to authenticate API requests.
- **Save the Token**: Ensure that you securely store the token, as it will be required in the header of your API requests. Note that for security reasons, this token might not be displayed again after creation.

## Using the API Token

### 1. Include in API Requests

- **Header Authentication**: When making API requests through the OpenAPI, include the API token in the request header. The header should be formatted as follows:

  ```
  x-undb-api-token: YOUR_API_TOKEN
  ```

  This header authenticates the request, ensuring that it is authorized to access the resources within the specified space.

### 2. Space-Specific Tokens

- **Per-Space Token**: Each space in **undb** requires its own API token. If you are working with multiple spaces, you will need to generate and use different tokens for each space. This design ensures that access to data and operations is compartmentalized and secure.

## Use Cases

- **Secure API Access**: Use API tokens to securely interact with **undb** tables and data via the OpenAPI, ensuring that only authorized requests are processed.
- **Multi-Space Operations**: Manage data across different spaces by generating and using separate API tokens for each space, allowing for clear and secure segmentation of operations.

## Summary

API tokens in **undb** provide a secure and efficient way to authenticate API requests. By including the token in the `x-undb-api-token` header, you ensure that your requests are authorized. Remember that each space requires its own API token, making it important to manage these tokens according to the specific needs of your projects.
