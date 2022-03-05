import Koa from "koa";
import { Controller } from "./controller";
import { Logger } from "../../domain/logger";
import { UserCreator } from "../../application/user-creator";

export default class UsersPostController implements Controller {
  #logger;
  #userCreator;

  constructor(dependencies: { logger: Logger; userCreator: UserCreator }) {
    this.#logger = dependencies.logger;
    this.#userCreator = dependencies.userCreator;
  }

  async run(ctx: Koa.Context) {
    this.#logger.debug("Received a request for creating a user");

    const { name, age } = ctx.request.body as { name: string; age: number };

    const user = this.#userCreator.run(name, age);

    this.#logger.debug("Finalized request for creating a user");

    ctx.status = 201;
    ctx.body = user;
  }
}
