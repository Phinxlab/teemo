CREATE TABLE IF NOT EXISTS status (
    id serial primary key,
    id_status_type serial not null,
    id_team serial not null,
    id_user serial not null,
    description text not null,
    FOREIGN KEY(id_user) REFERENCES "user"(id),
    FOREIGN KEY(id_team) REFERENCES team(id),
    FOREIGN KEY(id_status_type) REFERENCES status_type(id),
    created_at timestamp default now() not null,
    updated_at timestamp default now(),
    deleted_at timestamp
);
