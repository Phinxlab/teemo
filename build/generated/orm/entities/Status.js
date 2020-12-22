"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const typeorm_1 = require("typeorm");
const StatusType_1 = require("./StatusType");
const Team_1 = require("./Team");
const User_1 = require("./User");
let Status = class Status {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id" })
], Status.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", { name: "description" })
], Status.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "created_at",
        default: () => "now()",
    })
], Status.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        name: "updated_at",
        nullable: true,
        default: () => "now()",
    })
], Status.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", { name: "deleted_at", nullable: true })
], Status.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => StatusType_1.StatusType),
    typeorm_1.JoinColumn([{ name: "id_status_type", referencedColumnName: "id" }])
], Status.prototype, "statusType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Team_1.Team),
    typeorm_1.JoinColumn([{ name: "id_team", referencedColumnName: "id" }])
], Status.prototype, "team", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn([{ name: "id_user", referencedColumnName: "id" }])
], Status.prototype, "user", void 0);
Status = __decorate([
    typeorm_1.Index("status_pkey", ["id"], { unique: true }),
    typeorm_1.Entity("status", { schema: "public" })
], Status);
exports.Status = Status;
