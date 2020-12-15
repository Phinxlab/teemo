CREATE TABLE IF NOT EXISTS status_type (
    id serial primary key,
    value varchar(50) not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now(),
    deleted_at timestamp
);
