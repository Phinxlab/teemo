import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status_type_pkey", ["id"], { unique: true })
@Entity("status_type", { schema: "public" })
export class StatusType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "value", length: 50 })
  value: string;

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
}
