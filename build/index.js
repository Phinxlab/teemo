"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chino_runner_1 = require("@phinxlab/chino-sdk/build/chino-runner");
const app_1 = require("./app");
const UserStrategy_1 = require("./app/UserStrategy");
const initChino = async () => {
    const chinoConfig = {
        app: new app_1.TeemoApp(),
        strategy: {
            userFactory: new UserStrategy_1.UserStrategyFactory(),
        },
    };
    await chino_runner_1.chino_runner(chinoConfig);
};
initChino();
