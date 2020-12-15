CREATE TABLE IF NOT EXISTS "user" (
    id serial primary key,
    email varchar(100) not null,
    last_name varchar(50) not null,
    name varchar(50) not null,
    password text not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now(),
    deleted_at timestamp
);
