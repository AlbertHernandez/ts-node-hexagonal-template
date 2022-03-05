import { Middleware } from "koa";
import { UuidGenerator } from "../../domain/uuid-generator";
import { AwilixContainer, asValue } from "awilix";

export const requestContextMiddleware: Middleware = async (ctx, next) => {
  const requestId = UuidGenerator.generateUuid();
  ctx.set("Request-Id", requestId);

  const requestContext = {
    requestId,
  };

  const scopedContainer: AwilixContainer = ctx.state.container;

  scopedContainer.register({
    requestContext: asValue(requestContext),
  });

  await next();
};
