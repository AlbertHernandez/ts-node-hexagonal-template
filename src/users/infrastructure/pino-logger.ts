import pino, { Logger as PinoLoggerType } from "pino";
import { Level, Logger, LogMessage } from "../domain/logger";

export class PinoLogger implements Logger {
  private readonly logger: PinoLoggerType;

  constructor(dependencies: { level?: Level; isEnabled?: boolean } = {}) {
    this.logger = pino({
      enabled: dependencies.isEnabled,
      level: dependencies.level || "info",
      messageKey: "message",
      base: null,
    });
  }

  child(bindings: Record<string, unknown>): Logger {
    return this.logger.child(bindings);
  }

  debug(message: LogMessage | string): void {
    this.logger.debug(message);
  }

  error(message: LogMessage | string): void {
    this.logger.error(message);
  }

  fatal(message: LogMessage | string): void {
    this.logger.fatal(message);
  }

  info(message: LogMessage | string): void {
    this.logger.info(message);
  }

  warn(message: LogMessage | string): void {
    this.logger.warn(message);
  }
}
