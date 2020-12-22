"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusDAO = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const entities_1 = require("../entities");
class StatusDAO extends chino_sdk_1.ChinoDAO {
    constructor() {
        super(entities_1.Status, 'status');
    }
}
const i = new StatusDAO();
exports.StatusDAO = i;
