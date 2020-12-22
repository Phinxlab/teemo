import { ChinoServerConfig } from "@phinxlab/chino-sdk";
import { chino_runner } from "@phinxlab/chino-sdk/build/chino-runner";
import { TeemoApp } from "./app";
import { UserStrategyFactory } from "./app/UserStrategy";

const initChino = async () => {
  const chinoConfig: ChinoServerConfig = {
    app: new TeemoApp(),
    strategy: {
      userFactory: new UserStrategyFactory(),
    },
  };

  await chino_runner(chinoConfig);
};

initChino();
