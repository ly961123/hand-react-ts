import logger from '../logger';

const loggerInstance = logger();
const clientLogger = logger({ isClientLogger: true });

export default async (ctx: any, next: () => void) => {
  ctx.logger = loggerInstance;
  ctx.clientLogger = clientLogger;

  await next();
};
