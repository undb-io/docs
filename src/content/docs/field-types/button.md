---
title: Button
sidebar:
  order: 10.1
---

The `button` field type in 'undb' provides a way to trigger updates to multiple other fields with a single click. It is a versatile field that can be configured with various options to suit your needs.

<img src="/imgs/field/button/button-field.gif" alt="button field type" />

#### Key Features:

- **No Value**: The `button` field does not have a value.
- **Multiple Field Updates**: When clicked, the button can be configured to update multiple other fields within the same record.
- **Customizable Label**: You can configure the label of the button. If no label is set, the default text "Button" will be displayed.
- **Confirmation Dialog**: You can configure whether a confirmation dialog should appear before the button's actions are executed.
- **Not Displayed in Forms**: The `button` field type does not support being displayed in forms.

This field is particularly useful for actions that require user interaction within a grid view but do not need to be available in form views.

#### Triggering Button Action via OpenAPI

You can trigger the button's action programmatically using the OpenAPI endpoint. The URL format for triggering a button action is as follows:

```
/bases/{baseName}/tables/{tableName}/records/{recordId}/trigger/{fieldName}
```

- **`baseName`**: The name of the base where the table resides.
- **`tableName`**: The name of the table containing the record.
- **`recordId`**: The ID of the record where the button action should be triggered.
- **`fieldName`**: The name of the field that contains the button.
