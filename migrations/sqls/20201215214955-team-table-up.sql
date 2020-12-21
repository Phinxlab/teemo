CREATE TABLE IF NOT EXISTS team (
    id serial primary key,
    id_leader serial not null,
    description text not null,
    team_name varchar(50) not null,
    standup_start time not null,
    standup_end time not null,
    FOREIGN KEY(id_leader) REFERENCES "user"(id),
    created_at timestamp default now() not null,
    updated_at timestamp default now(),
    deleted_at timestamp
);
