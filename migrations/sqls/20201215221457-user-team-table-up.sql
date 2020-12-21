CREATE TABLE IF NOT EXISTS user_team (
    id_user serial not null,
    id_team serial not null,
    role_user varchar(50) not null, 
    FOREIGN KEY(id_user) REFERENCES "user"(id),
    FOREIGN KEY(id_team) REFERENCES team(id),
    created_at timestamp default now() not null,
    updated_at timestamp default now(),
    deleted_at timestamp
);
