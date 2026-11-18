# List GreenTick on ChatGPT

The connector is the live server at `https://api.greentick.ai/mcp`. The plugin is this `chatgpt/` folder. ChatGPT and Codex share one directory. Upload a ZIP of this folder, connect the server, then submit it for review.

Do this after the OAuth change that allows the ChatGPT redirect is deployed. A `gt_live_` key cannot connect. Do not put a client secret in this folder.

## Before you open the portal

1. Sign in to the OpenAI Platform as an owner of the organization that will publish GreenTick. Complete business verification so the directory can show the GreenTick name. Open Plugins from https://platform.openai.com.
2. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public. The authorization server must advertise `authorization_response_iss_parameter_supported` and `client_id_metadata_document_supported`.
3. The authorization server allows `https://chatgpt.com/connector_platform_oauth_redirect` and `https://chatgpt.com/connector/oauth/{callback_id}`. ChatGPT's public client is `https://chatgpt.com/oauth/client.json`. It signs in with PKCE and no client secret. The consent screen returns `iss` set to `https://api.greentick.ai`.
4. Prepare a reviewer test account: a Starter, Standard, or Premium owner with more than one WhatsApp Business account, some contacts, one label, and one approved template. The account must finish sign-in without an authenticator prompt, email code, or magic link. Put the password only in the portal.
5. Record a walkthrough of the five positive cases and three refusals in `plugin.json`. Host it at an HTTPS URL you can leave up for review.
6. Make this repository public before the listing goes live. It can stay private while you validate.

## Build the ZIP

From this folder, zip the contents so `plugin.json` is at the archive root:

```
cd chatgpt
zip -r ../greentick-chatgpt.zip . -x '*.DS_Store'
```

`plugin.json` holds the listing text, starter prompts, test cases, and release notes. `mcp.json` points at `https://api.greentick.ai/mcp` and sets OAuth to Client ID Metadata Documents. Raise `version` in `plugin.json` on every later release. The name `greentick` does not change after release.

## Upload and connect

In the developer portal, choose Upload plugin and select the ZIP. Fix every validation finding, then upload the corrected ZIP.

Open MCPs, select `greentick`, and connect.

- Server URL: `https://api.greentick.ai/mcp`
- Authentication: OAuth, Client ID Metadata Documents, read from `mcp.json`
- Client secret: leave it empty. This client does not use one.

Host the domain-verification token as plain text at the URL the portal shows. It is `https://api.greentick.ai/.well-known/openai-apps-challenge` when the challenge is on the API host. Return only that token. Do not commit it.

Sign in as the reviewer account and wait for the tool scan. Fix server findings, deploy, and rescan.

## Submit for review

In Review details, enter the reviewer account, the login URL `https://dashboard.greentick.ai`, and how to finish sign-in. Keep those credentials in the portal.

Paste the walkthrough URL into Review details, or set `review.demo_recording_url` in `plugin.json` and upload the ZIP again. The five positive cases and three negative cases are already in `plugin.json`.

On the policy step, say the plugin reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps nothing in the plugin files, follows https://greentick.ai/privacy-policy/, and is not for people under 18. It does not take payment.

`publication.countries` is empty, so the listing is not limited to a country list. Confirm `hello@greentick.ai` if the portal asks for a contact email.

## Publish

A passing review is not live until you select Publish.

After it is published, people find it in the ChatGPT directory and in Codex. Someone can also add `https://api.greentick.ai/mcp` as a custom MCP server before the directory listing is live.

## Updates

A change to listing text, icons, or skills is a new ZIP with a higher `version`. A change to the tools on the server is an API deploy. After that deploy, open the plugin, select the server, and rescan. The previous published package stays up until the new package is published. Tool updates that pass the scan go live without a new ZIP.
