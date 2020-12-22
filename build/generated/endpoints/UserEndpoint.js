"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEndpoint = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../orm/dao");
class UserEndpoint extends chino_sdk_1.ChinoEndpoint {
    constructor() {
        super(dao_1.UserDAO.entity.toLowerCase(), '/public/' + dao_1.UserDAO.entity.toLowerCase(), dao_1.UserDAO);
    }
}
exports.UserEndpoint = UserEndpoint;
