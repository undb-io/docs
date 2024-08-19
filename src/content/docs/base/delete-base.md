---
title: Delete base
sidebar:
  order: 4
---

In the `undb` platform, users can delete a `Base` to clean up data collections that are no longer needed. Deleting a `Base` is an irreversible action, so please ensure you fully understand the consequences before proceeding.

#### Location of the Feature

1. Log in to the `undb` platform and navigate to the `Space` where the `Base` you want to delete is located.
2. In the left-hand navigation panel, find and click on the `Base` you wish to delete.
3. Once inside the `Base`, click the settings icon (gear icon) in the top right corner to access the `Base` settings page.

#### Deletion Steps

1. At the bottom of the `Base` settings page, you will find a "Delete Base" button.
2. Click the "Delete Base" button, and a confirmation window will pop up, warning you that this action is irreversible.
3. If you are sure you want to delete this `Base`, type the name of the `Base` into the confirmation window to confirm the deletion.
4. Click the "Confirm Deletion" button to complete the process.

#### Important Notes

- **Data Loss**: Deleting a `Base` will permanently delete all data, table structures, views, and any related fields from other `Bases`. This action cannot be undone.
- **Linked Fields**: If other `Bases` have fields that reference tables within the deleted `Base`, those reference fields will also be deleted. If these reference fields are used in `rollup` fields, the `rollup` fields will also be deleted.
- **System Fields Update**: The deletion of a `Base` will update the system log fields, recording the user who performed the action and the time of deletion.

#### Frequently Asked Questions

1. **Can I recover a `Base` after I’ve deleted it by mistake?**

   - No. Once the deletion is complete, the data is permanently lost and cannot be recovered.

2. **Can I delete only certain tables or records within a `Base` instead of deleting the entire `Base`?**

   - Yes. You can manage and delete specific tables or records within a `Base` without deleting the entire `Base`.

3. **What impact does deleting a `Base` have on the API?**
   - Once a `Base` is deleted, all API endpoints associated with that `Base` will become invalid. Any applications relying on this `Base` will need to be updated accordingly.
