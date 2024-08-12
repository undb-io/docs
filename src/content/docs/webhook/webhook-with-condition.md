---
title: Webhook with condition
sidebar:
  order: 3
---

In **undb**, when setting up a webhook, you can add conditions to control when the webhook is triggered. This feature ensures that notifications or actions are sent only when specific criteria are met, making your integrations more precise and avoiding unnecessary alerts.

## How Conditions Work

### 1. Conditional Triggering

- **Selective Activation**: Conditions allow you to define specific rules that must be met for a webhook to be triggered. For instance, instead of triggering a webhook on every record update, you can set a condition so that it only triggers when a particular field changes or when a certain value is reached.

### 2. Customizable Criteria

- **Flexible Configuration**: You can configure conditions to check for various criteria, such as:
  - **Field Value Changes**: Trigger the webhook only if the value of a specific field changes (e.g., status changes from "pending" to "completed").
  - **Thresholds**: Trigger the webhook when a numeric field exceeds or falls below a certain threshold (e.g., stock level drops below 10).
  - **Specific States**: Trigger the webhook when a record enters a specific state (e.g., an order status is updated to "shipped").

## Use Cases for Webhook Conditions

### 1. Targeted Notifications

- **Critical Updates**: Use conditions to send notifications only when significant changes occur, such as when a high-priority task is marked as completed or when a critical issue is raised in a support ticket.

### 2. Efficient Data Synchronization

- **Minimized Data Load**: By applying conditions, you can ensure that only relevant data changes trigger sync operations with external systems, reducing unnecessary data transfer and processing.

### 3. Automated Alerts and Actions

- **Precision Alerts**: Set up webhooks to trigger alerts only under specific circumstances, such as when a record meets a critical condition (e.g., a temperature reading exceeds a safe limit in an IoT application).

- **Conditional Workflows**: Automate workflows based on specific conditions, such as triggering a reorder process only when inventory falls below a predefined level.

## Summary

Using conditions in webhooks allows for a high level of control over when notifications and actions are triggered. This ensures that your system responds only to the most relevant changes, improving efficiency and reducing noise in your data processes.
