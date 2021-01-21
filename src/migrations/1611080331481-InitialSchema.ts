import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class InitialSchema1611080331481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* --------------------------------------- USERS TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'last_name',
            type: 'varchar'
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );

    /* --------------------------------------- TEAM TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'teams',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'team_name',
            type: 'varchar'
          },
          {
            name: 'standup_start',
            type: 'time'
          },
          {
            name: 'standup_end',
            type: 'time'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );

    await manyToOneTeamsAndUsers(queryRunner);

    /* --------------------------------------- STATUS_TYPE TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'status_type',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'value',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );

    /* --------------------------------------- USERS_TEAMS_TEAM TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'users_teams_team',
        columns: [
          {
            name: 'role_user',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );

    await manyToOneUsersTeamsTeamAndUsers(queryRunner);
    await manyToOneUsersTeamsTeamAndTeams(queryRunner);
    await primaryKeyForUsersTeamsTeam(queryRunner);

    /* --------------------------------------- STATUS TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );

    await manyToOneStatusAndTeams(queryRunner);
    await manyToOneStatusAndUsers(queryRunner);
    await manyToOneStatusAndStatusType(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status', true);
    await queryRunner.dropTable('users_teams_team', true);
    await queryRunner.dropTable('status_type', true);
    await queryRunner.dropTable('teams', true);
    await queryRunner.dropTable('users', true);
  }
}

const manyToOneTeamsAndUsers = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'teams',
    new TableColumn({
      name: 'leader_id',
      type: 'int'
    })
  );
  await queryRunner.createForeignKey(
    'teams',
    new TableForeignKey({
      columnNames: ['leader_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users'
    })
  );
};

const manyToOneUsersTeamsTeamAndUsers = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'users_teams_team',
    new TableColumn({
      name: 'user_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'users_teams_team',
    new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users'
    })
  );
};

const manyToOneUsersTeamsTeamAndTeams = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'users_teams_team',
    new TableColumn({
      name: 'team_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'users_teams_team',
    new TableForeignKey({
      columnNames: ['team_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'teams'
    })
  );
};

const manyToOneStatusAndTeams = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'status',
    new TableColumn({
      name: 'team_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'status',
    new TableForeignKey({
      columnNames: ['team_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'teams'
    })
  );
};

const manyToOneStatusAndUsers = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'status',
    new TableColumn({
      name: 'user_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'status',
    new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users'
    })
  );
};

const manyToOneStatusAndStatusType = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'status',
    new TableColumn({
      name: 'status_type_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'status',
    new TableForeignKey({
      columnNames: ['status_type_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'status_type'
    })
  );
};

const primaryKeyForUsersTeamsTeam = async (queryRunner: QueryRunner) => {
  await queryRunner.createPrimaryKey('users_teams_team', ['user_id', 'team_id']);
};
