# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation in Gemini CLI.

## Use it

Gemini CLI installs an extension from a folder that contains `gemini-extension.json`. This repository keeps one folder per client, so install this folder:

```
git clone https://github.com/AkshayAgrawal1997/greentick-plugins.git
gemini extensions install ./greentick-plugins/gemini
```

Leave port 7777 free. That is the fixed sign-in callback. Start Gemini CLI and run:

```
/mcp auth greentick
```

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action.

## Data

The extension files store nothing. Gemini CLI sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
