import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from './Team';
import { User } from './User';

@Index('user_team_pkey', ['idTeam', 'idUser'], { unique: true })
@Entity('user_team', { schema: 'public' })
export class UserTeam {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_user' })
  idUser: number;

  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_team' })
  idTeam: number;

  @Column('character varying', { name: 'role_user', length: 50 })
  roleUser: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()'
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()'
  })
  updatedAt: Date | null;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Team)
  @JoinColumn([{ name: 'id_team', referencedColumnName: 'id' }])
  team: Team;

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'id_user', referencedColumnName: 'id' }])
  user: User;
}
