# List GreenTick on OpenClaw

The connector is the live server at `https://api.greentick.ai/mcp`. The plugin is this `openclaw/` folder. OpenClaw reads `openclaw.plugin.json` here.

Do this after the OAuth change that serves the OpenClaw client document is deployed. A `gt_live_` key cannot connect. Do not put a client secret, token, or `Authorization` header in this folder.

## Before you publish

1. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public. The authorization server advertises `client_id_metadata_document_supported`. It does not implement dynamic client registration.
2. Confirm `https://api.greentick.ai/.well-known/openclaw-client.json` returns the public client. `client_id` is that same URL. It has no secret. `token_endpoint_auth_method` is `none`.
3. The authorization server accepts that client on `http://127.0.0.1` and `http://localhost`, any port, for these paths only:
   - `/oauth/mcp/callback`
   - `/oauth/callback`
   - `/oauth/provider/callback`
   The consent screen returns `iss` set to `https://api.greentick.ai`.
4. Make this repository public before a ClawHub listing goes live. It can stay private while you validate.
5. Install this folder with `openclaw plugins install ./openclaw`, run `openclaw mcp login greentick`, and sign in as a Starter, Standard, or Premium owner. Ask it to list accounts and approved templates, and do not send anything.

## Install before the listing is live

`openclaw plugins install git:github.com/AkshayAgrawal1997/greentick-plugins` reads the repository root. This plugin is not at the root. Clone the repository and install this folder:

```
openclaw plugins install ./greentick-plugins/openclaw
```

If login cannot see `greentick`, add `examples/mcp.oauth.json` with `openclaw mcp set greentick` and run login again. Keep the server name `greentick` and the URL `https://api.greentick.ai/mcp`.

## ClawHub

From this folder, after `clawhub login`:

```
clawhub package publish . --dry-run
```

Fix every finding, then publish without `--dry-run`. Raise `version` in `openclaw.plugin.json` and `package.json` together. The name `greentick` does not change after release.

On the disclosure, say the plugin reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps nothing in the plugin files, follows https://greentick.ai/privacy-policy/, and is not for people under 18. It does not take payment.

## Updates

A plugin change is a new package version. A connector change is an API deploy. Installed copies stay on the installed version until `openclaw plugins update greentick`.
