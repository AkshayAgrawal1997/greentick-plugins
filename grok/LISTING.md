# List GreenTick on Grok

The connector is the live server at `https://api.greentick.ai/mcp`. The plugin is this `grok/` folder. Grok Build reads `.grok-plugin/plugin.json` and `.mcp.json` here. grok.com has no plugin package. People add the same server as a custom connector.

Do this after the OAuth change that serves the Grok client document is deployed. A `gt_live_` key cannot connect. Do not put a client secret, token, or `Authorization` header in this folder.

## Before you submit

1. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public. The authorization server advertises `client_id_metadata_document_supported`. It does not implement dynamic client registration.
2. Confirm `https://api.greentick.ai/.well-known/grok-client.json` returns the public client. `client_id` is that same URL. It has no secret. `token_endpoint_auth_method` is `none`. `.mcp.json` sets `oauth.clientId` to that URL so Grok Build skips dynamic registration.
3. The authorization server accepts that client on:
   - `https://grok.com/connectors-oauth-exchange-code`
   - `https://grok.com/connectors-oauth-exchange-code/`
   - `http://127.0.0.1` and `http://localhost`, any port, path `/callback` only
   The consent screen returns `iss` set to `https://api.greentick.ai`.
4. Make this repository public before the listing goes live. It can stay private while you validate.
5. Install this folder with `grok plugin install ./grok --trust`, sign in from `/mcps` as a Starter, Standard, or Premium owner, and ask it to list accounts and approved templates. Do not send anything.
6. On grok.com, add the custom connector from `README.md` with the same account and ask the same question. Do not send anything. A paid Grok plan is required for custom connectors. On Grok Business or Enterprise, a team admin adds the connector first.

## Submit to Grok Build

Open a pull request on `xai-org/plugin-marketplace` that adds one remote entry to `.grok-plugin/marketplace.json`. Pin `sha` to the full 40-character commit of this repository. Set `path` to `grok`. Then run `python3 scripts/generate-plugin-index.py`, `python3 scripts/validate-catalog.py`, and `python3 scripts/generate-plugin-index.py --check`.

```json
{
  "name": "greentick",
  "description": "Send and manage WhatsApp messages, templates, broadcasts, and automations from a conversation. Sign in with a GreenTick account. Hosted connector. No API key in the plugin.",
  "category": "communication",
  "source": {
    "source": "url",
    "url": "https://github.com/AkshayAgrawal1997/greentick-plugins.git",
    "sha": "<40-character commit>",
    "path": "grok"
  },
  "homepage": "https://docs.greentick.ai/mcp/introduction",
  "keywords": ["greentick", "greentick whatsapp", "greentick mcp"],
  "domains": ["greentick.ai", "api.greentick.ai", "dashboard.greentick.ai", "docs.greentick.ai"]
}
```

In the pull request, say the package is a hosted connector: tool calls go to the user's GreenTick account, then to WhatsApp through Meta. Grok stores the OAuth tokens. The package has no local executable, telemetry, background process, or credential file.

Network endpoints:

- `https://api.greentick.ai/mcp`
- `https://api.greentick.ai/.well-known/oauth-protected-resource`
- `https://api.greentick.ai/.well-known/oauth-authorization-server`
- `https://api.greentick.ai/.well-known/grok-client.json`
- `https://api.greentick.ai/oauth/authorize`
- `https://api.greentick.ai/oauth/token`
- `https://dashboard.greentick.ai` for the consent screen

The name `greentick` does not change after release. Raise `version` in `.grok-plugin/plugin.json` on every later release, then open a new pull request that bumps `sha`.

On the disclosure, say the plugin reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps nothing in the plugin files, follows https://greentick.ai/privacy-policy/, and is not for people under 18. It does not take payment.

## grok.com catalog

The grok.com connector catalog has no self-serve submission. Custom connectors use the fields in `README.md`. A catalog listing is a request to xAI after this connector is in use.

`grok plugin marketplace add` on this repository looks for `.grok-plugin/marketplace.json` at the repository root and will not find this folder. Install with the `#grok` path above.

## Updates

A plugin change is a push, then a new marketplace pull request that bumps `sha` and `version`. A connector change is an API deploy. Installed copies stay on the pinned commit until `grok plugin update greentick`.
