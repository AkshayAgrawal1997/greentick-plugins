---
name: reply-in-open-chat
description: Reply with text or media in an open WhatsApp chat. Use when the user wants to answer a customer who messaged recently.
---

Resolve the account with the choose-account skill first.

1. Call `list_conversations` and read `sessionExpiresAt`. Text and media need an open 24-hour window.
2. If the window is closed, say so and offer an approved template instead. Do not call `send_message` for text.
3. Send only after the user asks. Call `send_message` for text, or `send_conversation_media` for a file they already have.
4. Do not describe a failed send as delivered.
