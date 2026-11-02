---
name: suggest-reply
description: Suggest a reply for an open WhatsApp chat. Use when the user wants a draft answer and has not asked to send it yet.
---

Resolve the account with the choose-account skill first.

1. Call `list_conversations` and `list_conversation_messages` for the thread.
2. Call `suggest_reply` and show the suggestion.
3. Do not send it. Wait until the user asks to send, then use the reply-in-open-chat skill.
