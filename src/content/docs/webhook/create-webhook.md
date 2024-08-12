---
title: Create webhook
sidebar:
  order: 2
---

In **undb**, creating a webhook allows you to automatically send notifications or trigger actions whenever specific changes occur in a table's records. This feature is essential for integrating **undb** with external systems and automating workflows.

## Steps to Create a Webhook

### 1. Access the Webhook Settings

- **Navigate to the Table**: First, navigate to the table for which you want to create a webhook.
- **Open Webhook Settings**: Look for the **Webhook** option in the table settings or the dedicated webhook management area within the **undb** interface.

### 2. Configure the Webhook

- **Enter Webhook URL**: In the webhook configuration panel, enter the URL of the endpoint where you want the webhook to send data. This is typically an external server or service that will handle the incoming webhook request.

- **Select Trigger Events**: Choose the events that will trigger the webhook. You can select one or more of the following events:

  - **Record Creation**: Triggers the webhook when a new record is added to the table.
  - **Record Update**: Triggers the webhook when an existing record is modified.
  - **Record Deletion**: Triggers the webhook when a record is removed from the table.

- **Customize Payload (Optional)**: If needed, customize the data payload that will be sent with the webhook. This allows you to include specific fields or information from the record that triggered the event.

### 3. Save and Test the Webhook

- **Save the Webhook**: After configuring the webhook, save your settings. The webhook will now be active and will trigger whenever the specified events occur.

- **Test the Webhook**: It's a good idea to test the webhook to ensure that it is working correctly. You can do this by performing the action that should trigger the webhook (e.g., creating a new record) and checking if the external system receives the notification.

### 4. Manage and Monitor Webhooks

- **Edit or Delete Webhooks**: You can return to the webhook settings at any time to edit or delete existing webhooks. This allows you to update the endpoint, change the trigger events, or stop the webhook from sending notifications.

- **Monitor Webhook Activity**: Some systems allow you to monitor webhook activity, checking logs or receiving notifications if a webhook fails to send. This can help you troubleshoot issues and ensure that your integrations are functioning properly.

## Use Cases

- **CRM Integration**: Automatically update a CRM system with new customer records created in **undb**.
- **Automated Notifications**: Send an alert to a team chat whenever a high-priority record is updated or deleted.
- **Data Syncing**: Ensure that data in external systems is always up-to-date by syncing changes in **undb** records with those systems.

## Summary

Creating a webhook in **undb** is a straightforward process that enables powerful integrations and automations. By carefully configuring the webhook settings, you can ensure that your **undb** data seamlessly interacts with external systems, enhancing your workflows and keeping everything in sync.
