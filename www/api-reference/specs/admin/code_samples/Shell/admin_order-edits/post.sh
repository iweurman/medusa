curl -X POST 'https://medusa-url.com/admin/order-edits' \
-H 'Authorization: Bearer {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{ "order_id": "my_order_id", "internal_note": "my_optional_note" }'