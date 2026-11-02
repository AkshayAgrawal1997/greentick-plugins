---
name: schedule-broadcast
description: Preview and schedule a WhatsApp broadcast. Use when the user wants to message a label or a list of contacts at once.
---

Resolve the account with the choose-account skill first. Do not pass `waba_id` as `all`.

1. Call `list_templates` and use an `APPROVED` template.
2. Call `create_broadcast` with the audience. If it returns `needsInput`, ask every question and wait.
3. Call `preview_broadcast` and tell the user the recipient count.
4. Call `schedule_broadcast` only after the user accepts that count and asks to schedule.
