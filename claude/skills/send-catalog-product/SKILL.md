---
name: send-catalog-product
description: Send a catalog product in WhatsApp, or add a product to the catalog. Use when the user wants to share or create a product.
---

Resolve the account with the choose-account skill first.

1. Call `list_catalogs` and `list_catalog_products` before sending or editing a product.
2. Call `get_limits` before writing product text.
3. Add a product with `create_catalog_product` only when the user asks to add it.
4. Send with `send_product_message`, `send_catalog_message`, `send_product_list`, or `send_product_carousel` only after the user asks to send. Sending needs an open 24-hour window.
