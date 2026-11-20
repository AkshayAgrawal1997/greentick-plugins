# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation in Hermes Agent.

## Use it

Install this folder from the repository. It stays off until you enable it:

```
hermes plugins install AkshayAgrawal1997/greentick-plugins/hermes --no-enable
hermes plugins enable greentick
```

A portable package cannot ask for OAuth on its own. Add a same-named server to `~/.hermes/config.yaml`. That entry replaces the copy in `mcp.json`. The block is in `examples/config.oauth.yaml`:

```yaml
mcp_servers:
  greentick:
    url: "https://backend.greentick.ai/mcp"
    auth: oauth
    timeout: 120
    trust: untrusted
```

Sign in once. Hermes opens a browser, waits on `http://127.0.0.1:27890/callback` through `27894`, and stores the tokens:

```
hermes mcp login greentick
hermes mcp test greentick
```

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action. With `trust: untrusted`, a tool that is not marked read-only also asks before it runs.

The server's protected-resource document sets `resource` to `https://backend.greentick.ai/mcp`. Hermes signs in against that URL. Keep the server name `greentick`.

To try this folder before it is on the catalog, copy it to `~/.hermes/plugins/greentick` and run `hermes plugins enable greentick`. The sign-in block above is still required.

## Data

The plugin files store nothing. Hermes sends contacts, phone numbers, and message or template content to your GreenTick account through `https://backend.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Hermes keeps the OAuth tokens in its own token store. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
