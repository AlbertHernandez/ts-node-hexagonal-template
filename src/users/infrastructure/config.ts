import dotenv from "dotenv";
import convict from "convict";

dotenv.config();

const config = convict({
  server: {
    port: {
      doc: "Port of the server",
      format: "Number",
      default: 3000,
      env: "PORT",
    },
    name: {
      doc: "Name of the server",
      format: String,
      default: "Sentry Example App",
      env: "SERVER_NAME",
    },
  },
  env: {
    doc: "The application environment.",
    format: ["production", "beta", "development"],
    default: "development",
    env: "NODE_ENV",
  },
  logger: {
    level: {
      doc: "Level of the logger",
      format: ["debug", "info", "warn", "error", "fatal"],
      default: "fatal",
      env: "LOGGER_LEVEL",
    },
    isEnabled: {
      doc: "Indicates if logger is enabled",
      format: "Boolean",
      default: true,
      env: "LOGGER_ENABLE",
    },
  },
  sentry: {
    dsn: {
      doc: "Sentry dsn",
      format: String,
      env: "SENTRY_DSN",
      default: "",
    },
    enabled: {
      doc: "Flag that indicates if sentry is enabled",
      format: "Boolean",
      env: "IS_SENTRY_ENABLED",
      default: false,
    },
  },
});

config.validate();

export { config };
