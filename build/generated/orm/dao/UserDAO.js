"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDAO = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const entities_1 = require("../entities");
class UserDAO extends chino_sdk_1.ChinoDAO {
    constructor() {
        super(entities_1.User, 'user');
    }
}
const i = new UserDAO();
exports.UserDAO = i;
