export default class MovieController {
  public async getAllMovies(ctx: any) {
    console.log('老啦老弟0.0');
    
    const response = await ctx.httpProxy.requirementQuery.getAllRequirements(ctx.request.query);
    console.log(response, 'response');
    
    ctx.sendSuccessResponse('来啦老弟');
  }
}
