import { Middleware } from "koa";
import { AwilixContainer, asValue } from "awilix";
import { Logger } from "../../domain/logger";

export const requestLoggerMiddleware: Middleware = async (ctx, next) => {
  const scopedContainer: AwilixContainer = ctx.state.container;

  const logger = scopedContainer.resolve<Logger>("logger");
  const requestContext = scopedContainer.resolve("requestContext");
  const requestLogger = logger.child(requestContext);

  scopedContainer.register({
    logger: asValue(requestLogger),
  });

  await next();
};
