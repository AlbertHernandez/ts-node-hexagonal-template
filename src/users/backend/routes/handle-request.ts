import Koa from "koa";
import { Controller } from "../controllers";
import { AwilixContainer } from "awilix";

export const handleRequest =
  (controllerInstanceName: string) => async (ctx: Koa.Context) => {
    const scopedContainer: AwilixContainer = ctx.state.container;

    const controllerInstance = scopedContainer.resolve<Controller>(
      controllerInstanceName
    );

    await controllerInstance.run(ctx);
  };
