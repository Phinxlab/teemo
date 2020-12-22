"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTypeEndpoint = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../orm/dao");
class StatusTypeEndpoint extends chino_sdk_1.ChinoEndpoint {
    constructor() {
        super(dao_1.StatusTypeDAO.entity.toLowerCase(), '/public/' + dao_1.StatusTypeDAO.entity.toLowerCase(), dao_1.StatusTypeDAO);
    }
}
exports.StatusTypeEndpoint = StatusTypeEndpoint;
