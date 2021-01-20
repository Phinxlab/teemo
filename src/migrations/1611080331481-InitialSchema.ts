import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class InitialSchema1611080331481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* --------------------------------------- USER TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'user',
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
        name: 'team',
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

    await manyToOneTeamAndUser(queryRunner);

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

    /* --------------------------------------- USER_TEAM TABLE ---------------------------------------*/
    await queryRunner.createTable(
      new Table({
        name: 'user_team',
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

    await manyToOneUserTeamAndUser(queryRunner);
    await manyToOneUserTeamAndTeam(queryRunner);
    await primaryKeyForUserTeam(queryRunner);

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

    await manyToOneStatusAndTeam(queryRunner);
    await manyToOneStatusAndUser(queryRunner);
    await manyToOneStatusAndStatusType(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
    await queryRunner.dropTable('user_team');
    await queryRunner.dropTable('status_type');
    await queryRunner.dropTable('team');
    await queryRunner.dropTable('user');
  }
}

const manyToOneTeamAndUser = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'team',
    new TableColumn({
      name: 'leader_id',
      type: 'int'
    })
  );
  await queryRunner.createForeignKey(
    'team',
    new TableForeignKey({
      columnNames: ['leader_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user'
    })
  );
};

const manyToOneUserTeamAndUser = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'user_team',
    new TableColumn({
      name: 'user_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'user_team',
    new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'user'
    })
  );
};

const manyToOneUserTeamAndTeam = async (queryRunner: QueryRunner) => {
  await queryRunner.addColumn(
    'user_team',
    new TableColumn({
      name: 'team_id',
      type: 'int'
    })
  );

  await queryRunner.createForeignKey(
    'user_team',
    new TableForeignKey({
      columnNames: ['team_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'team'
    })
  );
};

const manyToOneStatusAndTeam = async (queryRunner: QueryRunner) => {
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
      referencedTableName: 'team'
    })
  );
};

const manyToOneStatusAndUser = async (queryRunner: QueryRunner) => {
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
      referencedTableName: 'user'
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

const primaryKeyForUserTeam = async (queryRunner: QueryRunner) => {
  await queryRunner.createPrimaryKey('user_team', ['user_id', 'team_id']);
};
