---
name: publish-workflow
description: Save and publish a WhatsApp automation workflow. Use when the user wants an automation created or turned on.
---

Resolve the account with the choose-account skill first.

1. Call `get_limits`, then `get_workflow_catalog` if you need the step types.
2. Call `validate_workflow` before `create_workflow` or `update_workflow`.
3. A saved workflow is a draft. It does not run until `publish_workflow`.
4. Call `publish_workflow` only after validation passed, the draft is saved, and the user asks to publish. Publishing switches it on.
5. Do not pass `phoneNumberRef` on a workflow. An empty phone field in the result is expected.
