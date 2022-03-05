import Koa from "koa";
import http from "http";
import { usersRouter } from "./routes";
import { config } from "../infrastructure/config";
import {
  requestContainerMiddleware,
  requestContextMiddleware,
  requestLoggerMiddleware,
} from "./middlewares";
import bodyParser from "koa-bodyparser";
import { Logger } from "../domain/logger";
import { container } from "../infrastructure/container";

export class UsersApp {
  private koa: Koa;
  readonly port: number;
  private logger: Logger;
  httpServer?: http.Server;

  constructor() {
    this.logger = container.resolve<Logger>("logger");
    this.port = config.get("server.port");
    this.koa = new Koa();

    this.koa.use(bodyParser());
    this.koa.use(requestContainerMiddleware);
    this.koa.use(requestContextMiddleware);
    this.koa.use(requestLoggerMiddleware);
    this.koa.use(usersRouter.middleware());
  }

  async start(): Promise<void> {
    this.httpServer = await this.koa.listen(this.port);
    const env = config.get("env");
    this.logger.info(
      `Users Backend App is running at http://localhost:${this.port} in ${env} mode`
    );
  }
}
