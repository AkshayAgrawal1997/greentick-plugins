# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation in OpenClaw.

## Use it

Clone this repository and install this folder. OpenClaw installs a git repository from its root, and this plugin lives in `openclaw/`:

```
git clone https://github.com/AkshayAgrawal1997/greentick-plugins.git
openclaw plugins install ./greentick-plugins/openclaw
```

Start the Gateway, then sign in. OpenClaw opens a browser and waits on a localhost callback:

```
openclaw mcp login greentick
```

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action.

If `openclaw mcp list` does not show `greentick`, save the same server and sign in again. The block is in `examples/mcp.oauth.json`:

```
openclaw mcp set greentick '{"url":"https://api.greentick.ai/mcp","transport":"streamable-http","auth":"oauth","oauth":{"scope":"mcp offline_access","clientMetadataUrl":"https://api.greentick.ai/.well-known/openclaw-client.json"}}'
openclaw mcp login greentick
```

The client document is `https://api.greentick.ai/.well-known/openclaw-client.json`. It has no secret. Sign-in returns to `http://127.0.0.1` or `http://localhost` on `/oauth/mcp/callback`, `/oauth/callback`, or `/oauth/provider/callback`. A Gateway that uses a public HTTPS callback needs its own client document and an `mcp.servers.greentick` entry that names it.

## Data

The plugin files store nothing. OpenClaw sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. OpenClaw keeps the OAuth tokens in its own token store. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
