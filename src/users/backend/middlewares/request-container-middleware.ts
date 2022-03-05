import { Middleware } from "koa";
import { container } from "../../infrastructure/container";

export const requestContainerMiddleware: Middleware = async (ctx, next) => {
  ctx.state.container = container.createScope();

  await next();
};
