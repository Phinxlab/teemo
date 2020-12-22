"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamEndpoint = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../orm/dao");
class TeamEndpoint extends chino_sdk_1.ChinoEndpoint {
    constructor() {
        super(dao_1.TeamDAO.entity.toLowerCase(), '/public/' + dao_1.TeamDAO.entity.toLowerCase(), dao_1.TeamDAO);
    }
}
exports.TeamEndpoint = TeamEndpoint;
