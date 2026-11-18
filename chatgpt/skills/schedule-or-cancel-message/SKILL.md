---
name: schedule-or-cancel-message
description: Schedule an approved WhatsApp template for later, or cancel a scheduled template. Use when the user asks to send later or to cancel a scheduled send.
---

Resolve the account with the choose-account skill first.

1. Scheduling uses `send_message` with type `template` and `scheduledAt`. The template must be `APPROVED`.
2. The time must be at least 5 minutes ahead and within 30 days. Use the account timezone from `get_api_key` when the user does not name a zone.
3. Schedule only after the user asks. Tell them the time it will send. A scheduled result is not a delivery.
4. Cancel with `cancel_scheduled_message` only after the user asks to cancel.
