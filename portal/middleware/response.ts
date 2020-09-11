import { ParameterizedContext } from 'koa';

function sendSuccessResponse(this: ParameterizedContext, body: any) {
  this.body = body;
}

function sendErrorResponse(this: ParameterizedContext, error: any) {
  this.body = { error };
}

export default async (ctx: any, next: () => void) => {
  const context = ctx;
  const { sn } = ctx;

  ctx.sendSuccessResponse = sendSuccessResponse.bind(context);
  ctx.sendErrorResponse = sendErrorResponse.bind(context);

  try {
    await next();
  } catch (error) {
    console.log(ctx, error, sn, '出错啦');
    
  }
};
