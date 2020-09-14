import Koa from 'koa';
import bodyParser from 'koa-body';
// import serve from 'koa-static';
import views from 'koa-views';
import { userAgent } from 'koa-useragent';
import router from './router';
import requestMiddleware from './middleware/request';
import responseMiddleware from './middleware/response';
import loggerMiddleware from './middleware/logger';

const rootDir = __dirname;
const app = new Koa();

app.use(userAgent);
app.use(bodyParser({ multipart: true }));
app.use(loggerMiddleware);
app.use(requestMiddleware);
app.use(async (ctx: Koa.ParameterizedContext, next: () => void) => {
  ctx.logger.log('verbose', ` sn: ${ctx.headers['x-tracer-id']} | ua: ${ctx.headers['user-agent']} `);
  await next();
});

// app.use(serve(`${rootDir}/static`, { index: false }));
app.use(responseMiddleware);
app.use(views(rootDir, { map: { html: 'ejs' } }));
app.use(router.routes());

export default app;
