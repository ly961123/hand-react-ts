import Router from 'koa-router';
import MovieController from '../controller/movie';

export const movie = new MovieController();
const {
  getAllMovies,
  getMoviesDetail,
  getCity,
} = movie;

const movieRouter: Router = new Router();

movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId/detail', getMoviesDetail);
movieRouter.get('/city', getCity);

export default movieRouter;
