"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Team = class Team {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id" })
], Team.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description" })
], Team.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "team_name", length: 50 })
], Team.prototype, "teamName", void 0);
__decorate([
    typeorm_1.Column("time without time zone", { name: "standup_start" })
], Team.prototype, "standupStart", void 0);
__decorate([
    typeorm_1.Column("time without time zone", { name: "standup_end" })
], Team.prototype, "standupEnd", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "created_at",
        default: () => "now()",
    })
], Team.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "updated_at",
        nullable: true,
        default: () => "now()",
    })
], Team.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", { name: "deleted_at", nullable: true })
], Team.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn([{ name: "id_leader", referencedColumnName: "id" }])
], Team.prototype, "leader", void 0);
Team = __decorate([
    typeorm_1.Index("team_pkey", ["id"], { unique: true }),
    typeorm_1.Entity("team", { schema: "public" })
], Team);
exports.Team = Team;
