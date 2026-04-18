import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Сохраняет подтверждение присутствия гостя на свадьбе."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    guests_count = int(body.get("guests_count") or 1)
    message = (body.get("message") or "").strip()

    if not name:
        return {"statusCode": 400, "headers": cors, "body": {"error": "Введите имя"}}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO rsvp (name, guests_count, message) VALUES (%s, %s, %s)",
        (name, guests_count, message or None),
    )
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": cors,
        "body": {"ok": True},
    }