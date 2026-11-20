# GreenTick

Use a signed-in GreenTick account to send WhatsApp messages, file templates, schedule broadcasts, and run automations from a conversation in Cursor.

## Use it

Install GreenTick from the Cursor marketplace. A team admin can also import this repository from Dashboard → Plugins & MCPs → Add Marketplace → Import from Repo.

Sign in as the GreenTick account owner and choose a default WhatsApp Business account. Then ask to list approved templates, reply in an open chat, or schedule a broadcast. Nothing is sent, published, scheduled, enrolled, or enabled until you ask for that action.

To try this folder before it is listed, copy it to `~/.cursor/plugins/local/greentick`, reload the window, and install it from Customize. Do not symlink this folder. Cursor skips a symlink that points outside that directory.

## Data

The plugin files store nothing. Cursor sends contacts, phone numbers, and message or template content to your GreenTick account through `https://api.greentick.ai/mcp`, and GreenTick sends the WhatsApp message through Meta. Retention follows the GreenTick privacy policy at https://greentick.ai/privacy-policy/.
