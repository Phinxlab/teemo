"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTeamEndpoint = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../orm/dao");
class UserTeamEndpoint extends chino_sdk_1.ChinoEndpoint {
    constructor() {
        super(dao_1.UserTeamDAO.entity.toLowerCase(), '/public/' + dao_1.UserTeamDAO.entity.toLowerCase(), dao_1.UserTeamDAO);
    }
}
exports.UserTeamEndpoint = UserTeamEndpoint;
