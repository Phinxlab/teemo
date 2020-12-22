"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeam = void 0;
const typeorm_1 = require("typeorm");
const Team_1 = require("./Team");
const User_1 = require("./User");
let UserTeam = class UserTeam {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_user" })
], UserTeam.prototype, "idUser", void 0);
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_team" })
], UserTeam.prototype, "idTeam", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "role_user", length: 50 })
], UserTeam.prototype, "roleUser", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "created_at",
        default: () => "now()",
    })
], UserTeam.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "updated_at",
        nullable: true,
        default: () => "now()",
    })
], UserTeam.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", { name: "deleted_at", nullable: true })
], UserTeam.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Team_1.Team),
    typeorm_1.JoinColumn([{ name: "id_team", referencedColumnName: "id" }])
], UserTeam.prototype, "team", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn([{ name: "id_user", referencedColumnName: "id" }])
], UserTeam.prototype, "user", void 0);
UserTeam = __decorate([
    typeorm_1.Index("user_team_pkey", ["idTeam", "idUser"], { unique: true }),
    typeorm_1.Entity("user_team", { schema: "public" })
], UserTeam);
exports.UserTeam = UserTeam;
