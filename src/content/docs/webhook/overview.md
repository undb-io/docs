---
title: Webhook overview
sidebar:
  order: 1
---

In **undb**, the **Webhook** feature allows you to automatically send notifications or trigger actions in response to changes in table records. By registering a webhook for a specific table, you can ensure that external systems or services are notified whenever a record is added, updated, or deleted.

## Key Features

### 1. Table-Specific Webhooks

- **Registering Webhooks**: You can register a webhook for each table within your **undb** environment. This allows you to set up specific notifications or actions that are triggered whenever there are changes to the records in that table.

### 2. Triggering Events

- **Record Changes**: Webhooks are triggered by specific events related to table records. These events include:
  - **Record Creation**: A webhook is triggered when a new record is added to the table.
  - **Record Update**: A webhook is triggered when an existing record is modified.
  - **Record Deletion**: A webhook is triggered when a record is removed from the table.

### 3. Notification and Integration

- **Sending Notifications**: Once a webhook is triggered, it sends a notification to the specified endpoint. This notification typically contains details about the change, such as which record was affected and what the new data looks like.
- **Integration with External Systems**: Webhooks can be used to integrate **undb** with external systems. For example, you can use webhooks to:
  - **Update a CRM system** when a new customer record is created.
  - **Trigger a workflow** in a project management tool when a task is updated.
  - **Notify a messaging service** like Slack when critical records are deleted.

### 4. Use Cases

- **Real-Time Updates**: Keep external systems in sync with changes in your **undb** tables, ensuring that data is always up-to-date across platforms.
- **Automated Workflows**: Automate business processes by triggering workflows or actions in other tools based on changes in your **undb** data.
- **Monitoring and Alerts**: Set up alerts for important changes, such as when high-priority records are modified or deleted, ensuring that stakeholders are immediately informed.

## Summary

The **Webhook** feature in **undb** provides a powerful way to connect your data with external systems and automate workflows. By registering webhooks for your tables, you can ensure that important changes trigger the right actions, keeping your operations running smoothly.
