import Koa from "koa";

export interface Controller {
  run(ctx: Koa.Context): Promise<void>;
}
