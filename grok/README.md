# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation in Grok.

## Use it

On grok.com, open Connectors, choose New Connector, then Custom.

- Name: `GreenTick`
- Server URL: `https://api.greentick.ai/mcp`
- Client ID: `https://api.greentick.ai/.well-known/grok-client.json`
- Client secret: leave empty
- Authorization endpoint: `https://api.greentick.ai/oauth/authorize`
- Token endpoint: `https://api.greentick.ai/oauth/token`
- Scopes: `mcp` and `offline_access`
- Token auth method: none (PKCE)

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action.

Grok Build installs this folder. The server entry is already in `.mcp.json`.

```
grok plugin install AkshayAgrawal1997/greentick-plugins#grok --trust
```

To try the folder before it is listed, install it from a clone:

```
grok plugin install ./greentick-plugins/grok --trust
```

Sign in from `/mcps`. A `gt_live_` key cannot connect.

## Data

The plugin files store nothing. Grok sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
