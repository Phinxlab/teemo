import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StatusType } from "./StatusType";
import { Team } from "./Team";
import { User } from "./User";

@Index("status_pkey", ["id"], { unique: true })
@Entity("status", { schema: "public" })
export class Status {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => StatusType)
  @JoinColumn([{ name: "id_status_type", referencedColumnName: "id" }])
  statusType: StatusType;

  @ManyToOne(() => Team)
  @JoinColumn([{ name: "id_team", referencedColumnName: "id" }])
  team: Team;

  @ManyToOne(() => User)
  @JoinColumn([{ name: "id_user", referencedColumnName: "id" }])
  user: User;
}
