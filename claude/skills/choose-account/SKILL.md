---
name: choose-account
description: Choose which GreenTick WhatsApp Business account and phone line to use. Use before any GreenTick tool when the account is unnamed, when the user names an account, or when a send needs a line.
---

Call `list_wabas` before the first GreenTick action in the conversation. Do not ask the user to pick an account when a default is already saved and they did not name one.

1. If the user names an account, pass that `waba_id` from `list_wabas`.
2. If they do not, omit `waba_id` so the saved default is used.
3. If the request could match more than one account and the default is not an obvious match, list the names and phone numbers and ask which one.
4. Pass `waba_id` as `all` only on a read, such as listing templates or reading plan usage. A send, publish, schedule, enroll, delete, or other change must use one account. If the tool rejects `all`, ask for one account.
5. Change the saved account with `set_default_waba` only when the user asks to change the default.
6. The consent screen does not save a phone line. When a change needs a line, the account has more than one, and none is saved, ask which line, then call `set_default_phone` with that `phoneNumberRef` before the change.
