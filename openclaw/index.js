import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

export default definePluginEntry({
  id: "greentick",
  name: "GreenTick",
  description:
    "Send and manage WhatsApp messages, templates, broadcasts, and automations from a conversation.",
  register() {
    // Skills and the GreenTick MCP server are declared in openclaw.plugin.json.
  },
});
