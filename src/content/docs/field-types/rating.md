---
title: Rating
sidebar:
  order: 6
---

In **undb**, the **Rating** type field is designed to capture ratings or scores, typically on a fixed scale (such as 1 to 5 stars). This field type is useful for scenarios where you want to collect feedback, evaluate performance, or rank items based on a set scale.

## Key Features of Rating Type

### 1. Numerical Scale

- **Fixed Scale**: The Rating field typically uses a fixed numerical scale, such as 1 to 5, 1 to 10, or any other range you define. This allows for standardized data collection when evaluating items or providing feedback.

### 2. Display Options

- **Stars or Custom Icons**: Ratings can be displayed as stars, numbers, or other custom icons depending on your preference. This makes the rating data visually intuitive and easy to interpret.

### 3. Constraints

Rating fields in **undb** can include constraints to ensure the ratings are within an expected range:

- **Minimum Rating**: Set a minimum allowable rating. This ensures that users cannot give a rating lower than the defined minimum.
- **Maximum Rating**: Similarly, set a maximum allowable rating to cap the highest rating a user can give.
- **Required**: You can also specify whether the rating field is mandatory. If set as required, every record must have a rating before it can be saved.

### 4. Default Value

- **Setting a Default Rating**: You can set a default rating value that will automatically populate the field when a new record is created. This is useful for scenarios where a neutral or default score is commonly applied.

### 5. Use Cases

- **Product Reviews**: Capture user feedback on products by allowing them to rate items on a scale (e.g., 1 to 5 stars).
- **Performance Evaluation**: Use ratings to assess employee performance, project quality, or other measurable activities.
- **Service Feedback**: Collect customer satisfaction ratings for services, support interactions, or events.

By incorporating the Rating type field in **undb**, you can standardize how feedback and evaluations are captured and stored, making it easier to analyze and act on the data collected.
