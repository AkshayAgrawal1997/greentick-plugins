# List GreenTick on Hermes Agent

The connector is the live server at `https://backend.greentick.ai/mcp`. The plugin is this `hermes/` folder. Hermes reads `plugin.json` and `mcp.json` here. Submit a catalog entry that pins this directory with `subdir: hermes`.

Do this after the repository is public. A `gt_live_` key cannot connect. Do not put a client secret, token, or `Authorization` header in this folder.

## Before you submit

1. Confirm `https://backend.greentick.ai/.well-known/oauth-protected-resource` and `https://backend.greentick.ai/.well-known/oauth-authorization-server` are public. The protected-resource `resource` is `https://backend.greentick.ai/mcp`. The authorization server advertises `client_id_metadata_document_supported` and `authorization_response_iss_parameter_supported`. It does not implement dynamic client registration.
2. Hermes signs in with its public client, `https://nousresearch.github.io/hermes-agent/docs/oauth/client-metadata.json`, using PKCE and no client secret. The authorization server already allows `http://127.0.0.1` and `http://localhost` callbacks, which covers Hermes ports `27890`–`27894`. The consent screen returns `iss` set to `https://backend.greentick.ai`.
3. `mcp.json` cannot set `auth: oauth`. The catalog README and `examples/config.oauth.yaml` tell the user to add `mcp_servers.greentick` and run `hermes mcp login greentick`. A same-named config entry replaces the package server, so `hermes mcp login` can see it.
4. Run `hermes plugins validate` on this folder at the commit you will pin. Fix every failure before the pull request.
5. Make this repository public before the listing goes live. It can stay private while you validate.
6. Copy this folder to `~/.hermes/plugins/greentick`, enable it, add the sign-in block, and sign in as a Starter, Standard, or Premium owner. Ask it to list accounts and approved templates, and do not send anything.

## Submit

Open a pull request on `NousResearch/hermes-agent` that adds `plugin-catalog/greentick.yaml`. Pin `sha` to the full 40-character commit. Quote `version`. In the pull request, say the package is a hosted connector: tool calls go to the user's GreenTick account, then to WhatsApp through Meta; Hermes stores the OAuth tokens; the package has no local executable, telemetry, background process, or credential file.

```yaml
name: greentick
title: GreenTick
description: >-
  Send and manage WhatsApp messages, templates, broadcasts, and automations
  from a conversation. Hosted connector: tool calls go to the user's GreenTick
  account, then WhatsApp through Meta. Hermes stores the OAuth tokens. No
  local executable, telemetry, or credentials in the package. Sign-in needs
  mcp_servers.greentick with auth: oauth, then hermes mcp login greentick.
repo: https://github.com/AkshayAgrawal1997/greentick-plugins
sha: "<40-character commit>"
subdir: hermes
version: "1.0.0"
category: tools
maintainer: GreenTick
docs_url: https://docs.greentick.ai/mcp/introduction
known_issues:
  - "mcp.json cannot declare OAuth. Add mcp_servers.greentick with auth: oauth and run hermes mcp login greentick."
```

Leave `tier` unset so it stays `community` until a Hermes maintainer marks it verified. Raise `version` in `plugin.json` and in that catalog file together. The name `greentick` does not change after release.

On the disclosure, say the plugin reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps nothing in the plugin files, follows https://greentick.ai/privacy-policy/, and is not for people under 18. It does not take payment.

## Before the listing is live

Someone can install the folder directly:

```
hermes plugins install AkshayAgrawal1997/greentick-plugins/hermes --no-enable
hermes plugins enable greentick
```

They still add `examples/config.oauth.yaml` to `~/.hermes/config.yaml` and run `hermes mcp login greentick`.

## Updates

A plugin change is a push, then a new catalog pull request that bumps `sha` and `version`. A connector change is an API deploy. Installed copies stay on the pinned commit until `hermes plugins update greentick`.
