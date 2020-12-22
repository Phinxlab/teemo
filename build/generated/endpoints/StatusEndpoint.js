"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEndpoint = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../orm/dao");
class StatusEndpoint extends chino_sdk_1.ChinoEndpoint {
    constructor() {
        super(dao_1.StatusDAO.entity.toLowerCase(), '/public/' + dao_1.StatusDAO.entity.toLowerCase(), dao_1.StatusDAO);
    }
}
exports.StatusEndpoint = StatusEndpoint;
