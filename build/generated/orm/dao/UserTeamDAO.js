"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamDAO = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const entities_1 = require("../entities");
class UserTeamDAO extends chino_sdk_1.ChinoDAO {
    constructor() {
        super(entities_1.UserTeam, 'userteam');
    }
}
const i = new UserTeamDAO();
exports.UserTeamDAO = i;
