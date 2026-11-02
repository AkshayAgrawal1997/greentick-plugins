---
name: check-plan-usage
description: Read the GreenTick plan, usage, billing info, or invoices. Use when the user asks what the plan includes, how much was used, or for an invoice.
---

Resolve the account with the choose-account skill first. These tools only read.

1. Call `get_plan` for the plan name, status, renewal, and included limits.
2. Call `get_usage` for message and AI token usage in this period.
3. Call `get_billing_info` or `list_invoices` when the user asks about billing or a receipt.
4. Do not buy, change, pause, cancel, or pay. Those stay on Manage Plan in the dashboard.
5. A read across every owned account can pass `waba_id` as `all`.
