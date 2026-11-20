# List GreenTick on Cursor

The connector is the live server at `https://api.greentick.ai/mcp`. The plugin is this `cursor/` folder. Submit the repository. Cursor reads `.cursor-plugin/marketplace.json` at the repository root and loads this folder from `source`.

Do this after the OAuth change that allows the Cursor redirects is deployed. A `gt_live_` key cannot connect. Do not put a client secret in this folder.

## Before you submit

1. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public. The authorization server must advertise `client_id_metadata_document_supported`. It does not implement dynamic client registration.
2. `mcp.json` sets `CLIENT_ID` to Cursor's public client, `https://cursor.com/oauth/mcp-client.json`. That skips dynamic registration. Cursor signs in with PKCE and no client secret. The consent screen returns `iss` set to `https://api.greentick.ai`.
3. The authorization server allows the HTTPS redirects in that client document:
   - `https://www.cursor.com/agents/mcp/oauth/callback`
   - `https://www.cursor.com/bot/mcp/oauth/callback`
   - `https://grok.com/connectors-oauth-exchange-code`
   Desktop sign-in uses `http://localhost:8787/callback` or `http://127.0.0.1:8787/callback`, which are already allowed as loopback redirects.
4. Make this repository public before the listing goes live. It can stay private while you validate.
5. Copy this folder to `~/.cursor/plugins/local/greentick`, reload the window, install it from Customize, and sign in as a Starter, Standard, or Premium owner. Ask it to list accounts and approved templates, and do not send anything.

## Submit

Open https://cursor.com/marketplace/publish and submit `https://github.com/AkshayAgrawal1997/greentick-plugins`.

The publisher form asks for these two fields. The logo is the same 625×625 mark already used by the Claude and ChatGPT packages, with a black plate.

- Description: `Send and manage WhatsApp messages, templates, broadcasts, and automations from a conversation.`
- Logotype URL: `https://raw.githubusercontent.com/AkshayAgrawal1997/greentick-plugins/main/chatgpt/assets/icon.png`

After this folder is on `main`, the same file is also at `https://raw.githubusercontent.com/AkshayAgrawal1997/greentick-plugins/main/cursor/assets/logo.png`.

Listing details are read from `.cursor-plugin/plugin.json` and this folder's `README.md`. The name `greentick` does not change after release. Raise `version` in `.cursor-plugin/plugin.json` and in `.cursor-plugin/marketplace.json` on every later release.

On the data step, say the plugin reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps nothing in the plugin files, follows https://greentick.ai/privacy-policy/, and is not for people under 18. It does not take payment.

## Before the listing is live

A team admin can import this repository from Dashboard → Plugins & MCPs → Add Marketplace → Import from Repo. Someone can also add the server by hand. Use the same URL and client id as `mcp.json`. Do not set an `Authorization` header.

## Updates

A plugin change is a push to the tracked branch with a higher `version`. A connector change is an API deploy. The previous published version stays up until the new one is published.
