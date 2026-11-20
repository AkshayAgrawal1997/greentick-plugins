---
name: enroll-automation
description: "Enroll contacts into a published WhatsApp automation. Use when the user wants people added to a workflow that is already on."
version: 1.0.0
author: GreenTick
license: Apache-2.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [WhatsApp, GreenTick, Automations]
    related_skills: [choose-account]
---

Resolve the account with the greentick:choose-account skill first.

1. Call `list_automations` or `get_workflow`. The automation must be published and switched on.
2. A draft or a switched-off workflow cannot enroll anyone. Say that and stop.
3. Call `enroll_automation` only after the user asks to enroll. Pass `contacts`, up to 100, each with `to`.
