# GreenTick plugins

Public plugins for AI clients that talk to GreenTick. Each client has its own folder. This repository does not contain API keys.

| Folder | Client |
| --- | --- |
| `claude/` | Claude plugin and directory listing notes |
| `chatgpt/` | ChatGPT and Codex plugin and directory listing notes |
| `cursor/` | Cursor plugin and marketplace listing notes |
| `gemini/` | Gemini CLI extension and gallery listing notes |
| `hermes/` | Hermes Agent plugin and catalog listing notes |
| `openclaw/` | OpenClaw plugin and ClawHub listing notes |
| `grok/` | Grok plugin and Grok Build listing notes |

Claude Code installs it from this repository:

```
/plugin install greentick --marketplace AkshayAgrawal1997/greentick-plugins
```

Codex installs the ChatGPT package from this repository:

```
codex plugin marketplace add AkshayAgrawal1997/greentick-plugins
codex plugin add greentick@greentick
```

Cursor installs it from the marketplace, or from this repository imported as a team marketplace. The manifest is `.cursor-plugin/marketplace.json`.

Gemini CLI installs the extension from the `gemini/` folder:

```
gemini extensions install ./greentick-plugins/gemini
```

OpenClaw installs this folder, then signs in with `openclaw mcp login greentick`. The steps are in `openclaw/README.md`:

```
openclaw plugins install ./greentick-plugins/openclaw
```

Grok Build installs the `grok/` folder. grok.com adds the same server as a custom connector. The steps are in `grok/README.md`:

```
grok plugin install AkshayAgrawal1997/greentick-plugins#grok --trust
```

Hermes Agent installs this folder, then signs in with a same-named server entry. The steps are in `hermes/README.md`:

```
hermes plugins install AkshayAgrawal1997/greentick-plugins/hermes --no-enable
hermes plugins enable greentick
```
