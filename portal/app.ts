import Koa from 'koa';
import bodyParser from 'koa-body';
// import serve from 'koa-static';
import views from 'koa-views';
import { userAgent } from 'koa-useragent';
import router from './router';

const rootDir = __dirname;
const app = new Koa();

app.use(userAgent);
app.use(bodyParser({ multipart: true }));
app.use(async (ctx: Koa.ParameterizedContext, next: () => void) => {
  console.log(ctx);
  ctx.response.body = 'hi, koa'
  // ctx.logger.log('verbose', ` sn: ${ctx.headers['x-tracer-id']} | ua: ${ctx.headers['user-agent']} `);
  await next();
});

// app.use(serve(`${rootDir}/static`, { index: false }));
app.use(views(rootDir, { map: { html: 'ejs' } }));
app.use(router.routes());

export default app;
