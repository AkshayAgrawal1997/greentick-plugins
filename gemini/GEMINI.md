# GreenTick

Use the signed-in GreenTick account for WhatsApp. The tools talk to `https://api.greentick.ai/mcp`. A `gt_live_` key cannot connect. Sign in through the browser.

Call `list_wabas` before the first GreenTick action. Use the choose-account skill when the account is unnamed, when the user names an account, or when a send needs a phone line.

Send, publish, schedule, enroll, enable, import, assign, or delete only after the user asks for that action. A draft or a preview stops and waits. Plan changes stay on Manage Plan in the GreenTick dashboard. Use only a WhatsApp Business account this owner owns.

When a tool returns `needsInput`, ask for each missing field and wait. Do not invent a value. Do not describe a failed send as delivered.
