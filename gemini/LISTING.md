# List GreenTick on Gemini CLI

The connector is the live server at `https://api.greentick.ai/mcp`. The extension is this `gemini/` folder. Gemini CLI reads `gemini-extension.json` from the folder you install.

Do this after the OAuth change that serves the Gemini CLI client document is deployed. A `gt_live_` key cannot connect. Do not put a client secret in this folder.

## Before you publish

1. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public. The authorization server advertises Client ID Metadata Documents. It does not implement dynamic client registration. Gemini CLI does not fetch a client metadata document on its own, so `gemini-extension.json` sets `clientId` to `https://api.greentick.ai/.well-known/gemini-cli-client.json`.
2. Confirm that URL returns the public client. It has no secret. The only redirect is `http://localhost:7777/oauth/callback`. Gemini CLI signs in with PKCE. The consent screen returns `iss` set to `https://api.greentick.ai`.
3. Make this repository public before a gallery listing goes live. It can stay private while you validate.
4. Install this folder with `gemini extensions install ./gemini`, run `/mcp auth greentick`, and sign in as a Starter, Standard, or Premium owner. Ask it to list accounts and approved templates, and do not send anything. Port 7777 must be free.

## Gallery

The Gemini CLI gallery indexes a public repository whose `gemini-extension.json` is at the repository root, tagged `gemini-cli-extension`. This repository also ships Claude, ChatGPT, and Cursor, so the manifest stays in `gemini/`.

To list it, attach a ZIP of this folder to a GitHub Release and mark that release Latest. `gemini-extension.json` must be at the archive root:

```
cd gemini
zip -r ../greentick-gemini.zip . -x '*.DS_Store'
```

People can install the folder from a clone before that release exists. `gemini extensions install` on the repository URL looks for the manifest at the repository root and will not find this folder.

## Updates

Raise `version` in `gemini-extension.json` on every later release and publish a new Latest archive. A connector change is an API deploy. Installed copies update with `gemini extensions update greentick`.
