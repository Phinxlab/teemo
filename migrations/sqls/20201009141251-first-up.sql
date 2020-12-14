-- EXAMPLE MIGRATION UP

CREATE TABLE IF NOT EXISTS "public"."account"(
  account_id SERIAL,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  nick TEXT,
  PRIMARY KEY("account_id")
);