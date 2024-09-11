---
title: 'Gallery View'
description: 'The Gallery view in the `undb` platform provides an intuitive way to visualize records in a table by displaying them as individual cards with photos. This view is ideal for scenarios where quick browsing and comparison of image content is needed.'
sidebar:
  order: 9.1
---

The **Gallery View** in **undb** is a visual way to display records, particularly useful for tables containing image, video, or other media fields. It provides users with a more intuitive interface for managing and viewing multimedia data.

<img src="/imgs/view/gallery/gallery.jpeg" alt="Gallery View" />

## Key Features

1. **Image Display**: The image fields of each record are shown as thumbnails, enabling quick previews and selection.
2. **Card Layout**: Records are displayed as cards, with multiple fields shown on each card. The main element of the card is typically an image, but additional fields can be customized.
3. **Field Customization**: Users can select which fields to display on the card, such as titles, descriptions, or prices, providing more context to the images.
4. **Custom Sorting and Filtering**: Similar to other views, records in Gallery View can be sorted and filtered, allowing users to find specific data quickly.
5. **Click to View Details**: Clicking on a record’s card will open a detailed modal view where users can see or edit all of the record's fields.
6. **Paginated Loading**: When there are many records, Gallery View supports paginated loading to ensure smooth performance even with large datasets.

## How to Use

### 1. Creating a Gallery View

To create a **Gallery View** in undb, follow these steps:

1. Navigate to the table you want to display.
2. In the view bar, click the **"Add View"** button.
3. In the pop-up window, select **Gallery View**.
4. Name the new view and confirm the creation.

### 2. Configuring the Gallery View

Once the Gallery View is created, you can configure the following settings:

- **Choose the Primary Image Field**: By default, the first image field will be displayed, but you can configure it to select a different image field.
- **Display Additional Fields**: You can choose to show other fields (like titles, descriptions, or prices) on the card. Click **"Manage View Fields"** to select which fields to show and rearrange their order.
- **Sorting and Filtering**: You can sort the records based on fields and apply filters to only display records that meet specific criteria.

### 3. Editing and Actions

- **Record Editing**: By clicking on a record’s card, you can open a detail view to edit, update, or delete the record.

### 4. Sharing the Gallery View

Similar to other undb views, you can share a Gallery View by clicking the **"Share"** button. The shared link can be sent to non-registered users, allowing them to view the records in Gallery View but not edit them.

## Use Cases

- **Product Display**: The Gallery View is ideal for showcasing products with images, such as e-commerce product catalogs, project portfolios, or real estate listings.
- **Media Management**: It is perfect for scenarios where multimedia resources need to be managed, such as design portfolios or asset libraries for marketing teams.

## Considerations

- **Image Field Requirement**: To use Gallery View, your table must contain at least one image field that can be displayed as the primary visual element for each record.
- **Performance Optimization**: With large datasets, paginated loading ensures the system remains responsive by avoiding loading all records at once.
