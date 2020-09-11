import Router from 'koa-router';
import MovieController from '../controller/movie';

export const movie = new MovieController();
const {
  getAllMovies,
} = movie;

const movieRouter: Router = new Router();

movieRouter.get('/', getAllMovies);

export default movieRouter;
