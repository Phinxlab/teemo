"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeemoApp = void 0;
const chino_sdk_1 = require("@phinxlab/chino-sdk");
class TeemoApp {
    event(event, name, data) { }
    getBuckets() {
        const exampleBucket = chino_sdk_1.ChinoAutoLoaderBucket.create(chino_sdk_1.Config.fromBBD("generated/endpoints"));
        return [exampleBucket];
    }
    configureTraverses() { }
    configureValidators() { }
}
exports.TeemoApp = TeemoApp;
