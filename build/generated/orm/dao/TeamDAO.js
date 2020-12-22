"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamDAO = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const entities_1 = require("../entities");
class TeamDAO extends chino_sdk_1.ChinoDAO {
    constructor() {
        super(entities_1.Team, 'team');
    }
}
const i = new TeamDAO();
exports.TeamDAO = i;
