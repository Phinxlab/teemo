"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTypeDAO = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const entities_1 = require("../entities");
class StatusTypeDAO extends chino_sdk_1.ChinoDAO {
    constructor() {
        super(entities_1.StatusType, 'statustype');
    }
}
const i = new StatusTypeDAO();
exports.StatusTypeDAO = i;
