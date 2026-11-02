# List GreenTick on Claude

The connector is the live server at `https://api.greentick.ai/mcp`. The plugin is this `claude/` folder. Submit both from the same Claude organization, then pair them so a person who installs both sees one set of tools.

Do this after the OAuth server is deployed. A `gt_live_` key cannot connect.

## Before you open the portal

1. Use a paid Claude plan. On Team or Enterprise, an Owner submits at https://claude.ai/directory/manage. Connect the GitHub account that can push `AkshayAgrawal1997/greentick-plugins`.
2. Create one confidential OAuth client in GreenTick's authorization server. Register the redirect `https://claude.ai/api/mcp/auth_callback`.
3. Set these on the API host. Do not commit them.
   - `CLAUDE_OAUTH_CLIENT_ID`
   - `CLAUDE_OAUTH_CLIENT_SECRET`
   - `PUBLIC_API_URL=https://api.greentick.ai`
   - `DASHBOARD_URL=https://dashboard.greentick.ai`
4. Confirm `https://api.greentick.ai/.well-known/oauth-protected-resource` and `https://api.greentick.ai/.well-known/oauth-authorization-server` are public.
5. Make this repository public before the plugin listing goes live. It can stay private while you validate.
6. From this repository, run `claude plugin validate ./claude --strict`.
7. Prepare a reviewer test account: a Starter, Standard, or Premium owner with more than one WhatsApp Business account, some contacts, and one approved template. Put the password only in the portal.

## Submit the connector

In the developer portal, choose Submit new, then MCP connector.

- Server URL: `https://api.greentick.ai/mcp`
- How users connect: Universal URL
- Authentication: Always required
- Methods: Anthropic-held client credentials, plus CIMD so Claude Code can sign in
- Client ID and secret: the confidential client from the step above. Anthropic holds the secret.
- Documentation: `https://docs.greentick.ai/mcp/introduction`
- Support: `hello@greentick.ai`
- Privacy policy: `https://greentick.ai/privacy-policy/`
- Icon: the GreenTick logo

Answer the data questions: the server reads personal data (contacts, phone numbers, message and template content), sends that data to GreenTick and then to WhatsApp through Meta, keeps it under the privacy policy, and is not for people under 18.

Claude Code does not use the Anthropic-held client. The authorization server advertises Client ID Metadata Documents and accepts `http://localhost` and `http://127.0.0.1` callbacks on any port.

## Submit the plugin

Choose Submit new, then Plugin bundle.

- Repository: `AkshayAgrawal1997/greentick-plugins`
- Plugin path: `claude`
- Branch: the default branch

Select Validate. Fix every Blocking finding, push, and validate that commit again. A result belongs to one commit.

Listing details are read from `plugin.json` and this folder's `README.md`. The name `greentick` does not change after release. Raise `version` in `plugin.json` on every later release.

On the data step, say the plugin reads personal data, sends it to GreenTick and WhatsApp through the declared connector, keeps nothing in the plugin files, follows the privacy policy, and is not for people under 18.

Confirm `hello@greentick.ai` as the contact email and accept the acknowledgements. Leave GitHub push webhook selected if you can install it. That needs admin on this repository.

## Publish and pair

A passing version is not live until you select Publish. A reviewer publishes the first version.

After both listings are in, pair the connector with the plugin from the same Claude organization. Both point at `https://api.greentick.ai/mcp`, so a person who adds both sees one set of tools.

## Updates

A connector change is an API deploy. A plugin change is a push to the tracked branch with a higher `version`. The directory scans the new commit. The previous published version stays up until the new one is published.

To check immediately, open the submission and select Check for new commits.
