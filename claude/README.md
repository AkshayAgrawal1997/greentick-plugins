# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation with Claude.

## Use it

Install this plugin from the GreenTick marketplace:

```
/plugin install greentick --marketplace AkshayAgrawal1997/greentick-plugins
```

Connect the GreenTick connector. Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask Claude to list approved templates, reply in an open chat, or schedule a broadcast. Claude does not send, publish, schedule, enroll, or enable anything until you ask for that action.

## Data

The plugin files store nothing. Claude sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
