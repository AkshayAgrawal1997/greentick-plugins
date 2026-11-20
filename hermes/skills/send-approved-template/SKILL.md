---
name: send-approved-template
description: "Send an approved WhatsApp template. Use when the user asks to send a template message to a phone number."
version: 1.0.0
author: GreenTick
license: Apache-2.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [WhatsApp, GreenTick, Templates]
    related_skills: [choose-account]
---

Resolve the account with the greentick:choose-account skill first.

1. Call `list_templates` and use a template whose status is `APPROVED`. Do not send a template that is not approved.
2. Send only after the user asks to send it. Call `send_message` with type `template`, the template name, and the language.
3. If the result is `needsInput`, ask for each missing field and wait. Do not invent a value.
4. A closed 24-hour window is fine for an approved template. Do not describe a failed send as delivered.
