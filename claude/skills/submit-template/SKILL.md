---
name: submit-template
description: Validate and submit a WhatsApp template, or generate its header image on GreenTick. Use when the user wants a new template or a header image.
---

Resolve the account with the choose-account skill first.

1. Call `get_limits` before writing template text. Do not cut a field to slip under a limit. Tell the user the limit and the field name.
2. Call `validate_template` before `create_template`. Validation does not call Meta and does not save a draft.
3. If the result is `needsInput`, ask every question and wait. Do not invent Marketing, English (US), a text header, or Reply STOP unless the user accepts it.
4. Generate a header image only with `generate_template`. Do not use Canva or any other image service. Ask for the brand website before generating. Tell the user the image takes a few minutes before the confirmed call. When it returns `headerImageUrl`, show that image in the reply.
5. Questions marked optional, including a phone number, a copy code, a website button, and a WhatsApp Flow, can be left blank. Pass `skip` for each one the user skips. Do not invent that button. When a Flow question includes `options`, those are the published Flows on this account. Ask the user to pick one by name or skip. Pass the option `value`, the numeric Flow id. When `options` is empty, say this account has no published Flow and they can continue without one.
6. The opt-out line and the line that tells the user to tap a button are the template footer. Show that line as the footer, directly above the buttons.
7. A template belongs to the WhatsApp Business account. Do not say it sends from a phone number.
