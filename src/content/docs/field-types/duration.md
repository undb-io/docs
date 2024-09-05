---
title: Duration
sidebar:
  order: 3.2
---

The `duration` field in undb is designed to handle time intervals and durations, represented in the `hh:mm:ss` format. This field is particularly useful for scenarios where exact durations are important, such as tracking task durations, event times, or any time-based data.

#### Key Features:

- **Time Format**:

  - The duration is represented in **`hh:mm:ss`** format (hours:minutes:seconds).
  - This precise format allows users to input and view durations with accuracy down to the second.

- **Flexible Input**:

  - Users can input the duration directly into the field using the **hours**, **minutes**, and **seconds** format.
  - The field can also support automatic calculations based on user input (e.g., converting larger time periods into the appropriate `hh:mm:ss` format).

- **Display Format**:

  - Durations are always displayed in the `hh:mm:ss` format, providing consistency across all records and making it easy to compare time intervals.

- **Default Value**:

  - A default value can be configured in the `duration` field, setting an initial duration that is automatically applied when creating new records.

- **Range Constraints**:

  - Users can configure a **minimum** and **maximum** allowable duration, ensuring that any entered values fall within predefined limits.

- **Required Field**:
  - The `duration` field can be marked as required, ensuring that a valid time duration is entered before a record is saved.

#### Example Use Cases:

- **Task Duration Tracking**: Record how long specific tasks take to complete, in precise hours, minutes, and seconds.
- **Event Timing**: Track the duration of events like meetings or workshops down to the second.
- **Workout Sessions**: Record workout or training session lengths with exact time intervals.

#### Configuration Options:

1. **Time Format**: The field uses `hh:mm:ss` for both input and display, ensuring accurate time representation.
2. **Range**: Set minimum and maximum durations to ensure valid time intervals are entered.
3. **Default Value**: Optionally set an initial value for newly created records.
4. **Required**: Indicate whether the field must be filled in to save a record.

The `duration` field in undb offers an accurate and structured way to manage time-based data using the `hh:mm:ss` format, suitable for a variety of use cases where precise time tracking is needed.
