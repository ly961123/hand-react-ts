export default class MovieController {
  public async getAllMovies(ctx: any) {
    console.log('老啦老弟0.0');
    
    // ==================================================================这里还得继续-=======================
    // const response = await ctx.httpProxy.movie.getRequirements();
    // console.log(response, 'response');
    
    ctx.sendSuccessResponse('来啦老弟');
  }
}
