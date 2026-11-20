---
name: suggest-reply
description: "Suggest a reply for an open WhatsApp chat. Use when the user wants a draft answer and has not asked to send it yet."
version: 1.0.0
author: GreenTick
license: Apache-2.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [WhatsApp, GreenTick, Live Chat]
    related_skills: [choose-account]
---

Resolve the account with the greentick:choose-account skill first.

1. Call `list_conversations` and `list_conversation_messages` for the thread.
2. Call `suggest_reply` and show the suggestion. When you name the customer, copy `phone` from `list_conversations` exactly. Do not regroup the digits in `contactWaId`.
3. Do not send it. Wait until the user asks to send, then use the greentick:reply-in-open-chat skill.
