"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStrategyFactory = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
const dao_1 = require("../generated/orm/dao");
/**
 *  WHERE => User is your entities user strategy and UserDAO is this Dao
*/
class UserStrategy extends chino_sdk_1.ChinoUser {
    constructor(user) {
        super();
        this.id = user.id.toString();
    }
}
class UserStrategyFactory extends chino_sdk_1.ChinoUserFactory {
    async findByID(id) {
        const [account] = await dao_1.UserDAO.query().equals('user_id', id).run();
        if (!account)
            throw new Error('Account is not exists');
        return new UserStrategy(account);
    }
    async findByNick(nick) {
        throw new Error('Method not implemented.');
    }
    async findByUsername(username) {
        throw new Error('Method not implemented.');
    }
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    findByGroupID(id) {
        throw new Error('Method not implemented.');
    }
    async findByGroupName(name) {
        throw new Error('Methods not implemented');
    }
    getValidationMethod() {
        return chino_sdk_1.ChinoValidationMethod.USERNAME;
    }
}
exports.UserStrategyFactory = UserStrategyFactory;
