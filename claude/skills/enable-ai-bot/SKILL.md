---
name: enable-ai-bot
description: Create, test, and enable a GreenTick AI bot. Use when the user wants a bot set up or turned on.
---

Resolve the account with the choose-account skill first.

1. Call `get_limits` and `get_ai_bot_catalog` before writing the bot.
2. Add knowledge with `add_ai_bot_knowledge`, then `get_ai_bot_knowledge` until every source is ready. Crawling is not a failure.
3. Call `test_ai_bot` and show the user the test reply.
4. Call `enable_ai_bot` only after the test succeeded, every knowledge source is ready, and the user asks to enable it.
