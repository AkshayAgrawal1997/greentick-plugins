---
name: send-whatsapp-flow
description: Publish a WhatsApp Flow and send it in a chat. Use when the user wants a form published or sent.
---

Resolve the account with the choose-account skill first.

1. Call `get_limits`, then `validate_flow` before `create_flow` or `update_flow`.
2. Call `publish_flow` only after the draft is valid and the user asks to publish.
3. Call `send_flow` only after the Flow is published and the user asks to send it. Pass `metaFlowId` from `list_flows`, `get_flow`, or `create_flow`. It is numeric. Do not send a 24-character id.
4. Sending needs an open 24-hour window. If the window is closed, say so.
