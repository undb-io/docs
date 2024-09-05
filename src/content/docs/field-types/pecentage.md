---
title: Percentage
sidebar:
  order: 3.1
---

The `percentage` field in undb allows users to manage and display data as percentages. This field type is particularly useful for representing ratios, progress, or any data that is calculated as a fraction of 100. It provides an interactive interface using a slider to adjust values.

#### Key Features:

- **Slider Interface**:

  - The `percentage` field uses a **slider** for updating and displaying values.
  - Users can easily adjust the percentage by dragging the slider, providing an intuitive way to modify values in real-time.
  - As the slider is moved, the percentage value is immediately updated and displayed in the user interface.

- **Value Representation**:

  - Internally, the values are stored as decimal numbers (e.g., `0.75` for `75%`), but are displayed to the user as percentages (e.g., `75%`).
  - A **range** for the slider can be set, with typical boundaries being between `0%` and `100%`, though custom ranges are supported.

- **Constraints**:

  - **Minimum and Maximum Values**: Users can define custom limits for the percentage range (e.g., between `10%` and `90%`).
  - **Step Precision**: The slider can be configured to adjust in predefined increments (e.g., `1%`, `0.5%`), ensuring control over how finely the percentages can be adjusted.

- **Default Value**:

  - A default value can be configured for the `percentage` field, so when a new record is created, the slider will be set to this value unless overridden.

- **Required Field**:

  - You can set the `percentage` field as required, ensuring that users must provide a value before creating or updating a record.

- **Validation**:
  - The system ensures that any percentage value entered or selected adheres to the defined constraints, preventing invalid entries.

#### Example Use Cases:

- **Task Progress**: Tracking task completion, where the slider represents the percentage of a task completed.
- **Discount Rates**: Managing dynamic discount rates in sales or pricing models.
- **Performance Metrics**: Visualizing performance statistics, such as success rates or efficiency, using the percentage slider.

#### Configuration Options:

1. **Range**: Define the minimum and maximum values the slider can represent (e.g., `0%` to `100%`).
2. **Step Precision**: Set the increments for the slider (e.g., every `1%` or every `0.5%`).
3. **Default Value**: Optionally set a default percentage value.
4. **Required**: Indicate whether this field must be completed when submitting a record.

The percentage field in undb offers an efficient way to handle percentage-based data with an intuitive and visually clear interface using a slider.
