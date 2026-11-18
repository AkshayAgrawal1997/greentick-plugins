---
name: import-contacts
description: Create or update WhatsApp contacts, labels, and attributes. Use when the user wants to add people, tag them, or set a custom field.
---

Resolve the account with the choose-account skill first.

1. Call `list_labels` and `list_attributes` before writing labels or custom fields. Use ids from those lists.
2. `labels` replaces the labels on that contact. `attributes` replaces the custom fields. Do not send a label or attribute as a single string.
3. Call `create_contacts` or `update_contacts` only for the people the user asked to save.
4. Call `delete_contact` only after the user asks to delete that contact.
