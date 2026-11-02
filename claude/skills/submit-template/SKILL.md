---
name: submit-template
description: Validate and submit a WhatsApp template, or generate its header image on GreenTick. Use when the user wants a new template or a header image.
---

Resolve the account with the choose-account skill first.

1. Call `get_limits` before writing template text. Do not cut a field to slip under a limit. Tell the user the limit and the field name.
2. Call `validate_template` before `create_template`. Validation does not call Meta and does not save a draft.
3. If the result is `needsInput`, ask every question and wait. Do not invent Marketing, English (US), a text header, or Reply STOP unless the user accepts it.
4. Generate a header image only with `generate_template`. Do not use Canva or any other image service. Ask for the brand website before generating. Tell the user the image takes a few minutes before the confirmed call. When it returns `headerImageUrl`, show that image in the reply.
5. A template belongs to the WhatsApp Business account. Do not say it sends from a phone number.
