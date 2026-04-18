import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText

SMTP_EMAIL = "ninadima_06_2026@mail.ru"  # v2

def send_email(name: str, guests_count: int, message: str):
    text = f"""Новое подтверждение присутствия на свадьбе!

Имя: {name}
Гостей: {guests_count}
Пожелание: {message or "—"}
"""
    msg = MIMEText(text, "plain", "utf-8")
    msg["Subject"] = f"💌 {name} подтвердил(а) присутствие"
    msg["From"] = SMTP_EMAIL
    msg["To"] = SMTP_EMAIL

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login(SMTP_EMAIL, os.environ["SMTP_PASSWORD"])
        server.sendmail(SMTP_EMAIL, SMTP_EMAIL, msg.as_string())

def handler(event: dict, context) -> dict:
    """Сохраняет подтверждение присутствия гостя и отправляет письмо на почту."""
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

    send_email(name, guests_count, message)

    return {
        "statusCode": 200,
        "headers": cors,
        "body": {"ok": True},
    }