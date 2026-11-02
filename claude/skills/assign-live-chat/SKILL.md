---
name: assign-live-chat
description: Assign a Live Chat thread to a teammate, team, or bot. Use when the user wants a conversation handed to someone.
---

Resolve the account with the choose-account skill first.

1. Call `list_conversations` to get the conversation id.
2. Call `list_teammates` for a person, `list_teams` for a team, or `list_ai_bots` for a bot.
3. Call `assign_conversation` only after the user asks to assign it. `assigneeType` is `unassigned`, `user`, `bot`, or `team`.
