---
name: greentick
description: "Use a signed-in GreenTick account for WhatsApp messages, templates, broadcasts, contacts, and automations. Load this before any GreenTick action."
version: 1.0.0
author: GreenTick
license: Apache-2.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [WhatsApp, GreenTick, Messaging]
    related_skills: [choose-account, send-approved-template, reply-in-open-chat, schedule-broadcast]
---

# GreenTick

Use the signed-in owner's GreenTick account. Tools come from the `greentick` MCP server. Load `greentick:choose-account` before the first tool call, then load the skill that matches the request.

Nothing is sent, published, scheduled, enrolled, enabled, or deleted until the user asks for that action. Do not buy, change, pause, cancel, or pay a plan. Those stay on Manage Plan in the GreenTick dashboard.

## When to use

Load a skill by its namespaced name:

| Request | Skill |
| --- | --- |
| Choose the WhatsApp account or phone line | `greentick:choose-account` |
| Send an approved template | `greentick:send-approved-template` |
| Reply in an open chat | `greentick:reply-in-open-chat` |
| Draft a reply and wait | `greentick:suggest-reply` |
| Preview or schedule a broadcast | `greentick:schedule-broadcast` |
| Schedule or cancel one template | `greentick:schedule-or-cancel-message` |
| File a template or header image | `greentick:submit-template` |
| Save contacts, labels, or attributes | `greentick:import-contacts` |
| Create or publish a workflow | `greentick:publish-workflow` |
| Enroll people in a published automation | `greentick:enroll-automation` |
| Set up or enable an AI bot | `greentick:enable-ai-bot` |
| Assign a Live Chat thread | `greentick:assign-live-chat` |
| Share or add a catalog product | `greentick:send-catalog-product` |
| Publish or send a WhatsApp Flow | `greentick:send-whatsapp-flow` |
| Read the plan, usage, or an invoice | `greentick:check-plan-usage` |

## Pitfalls

- A 401 means this Hermes profile is not signed in. Stop and tell the user to run `hermes mcp login greentick`. Do not invent a token or retry with a different host.
- A failed send is not a delivery. Say what the tool returned.
- Text and media need an open 24-hour window. An approved template does not.

## Verification

A read such as `list_wabas` or `list_templates` returns this owner's accounts or templates. A send, publish, schedule, enroll, enable, or delete has not run unless the user asked for it and the tool result says it did.
