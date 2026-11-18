# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation with ChatGPT.

## Use it

Install GreenTick from the ChatGPT plugin directory, or from this repository in Codex:

```
codex plugin marketplace add AkshayAgrawal1997/greentick-plugins
codex plugin add greentick@greentick
```

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action.

## Data

The plugin files store nothing. ChatGPT sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
