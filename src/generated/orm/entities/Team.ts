import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Index('team_pkey', ['id'], { unique: true })
@Entity('team', { schema: 'public' })
export class Team {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('text', { name: 'description' })
  description: string;

  @Column('character varying', { name: 'team_name', length: 50 })
  teamName: string;

  @Column('time without time zone', { name: 'standup_start' })
  standupStart: string;

  @Column('time without time zone', { name: 'standup_end' })
  standupEnd: string;

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

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'id_leader', referencedColumnName: 'id' }])
  leader: User;
}
