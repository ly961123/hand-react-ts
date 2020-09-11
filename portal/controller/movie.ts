import { setTimeOutData } from '../util/function';
import { movieList } from '../mock/movie.mock';

export default class MovieController {
  public async getAllMovies(ctx: any) {
    const data = {
      data: movieList(),
      msg: 'success'
    }
    const res = await setTimeOutData(data);
    ctx.sendSuccessResponse(res);
  }
}
