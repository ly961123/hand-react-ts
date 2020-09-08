import Router from 'koa-router';
import MovieController from '../controller/movie';

export const movie = new MovieController();
const {
  getAllMovies,
} = movie;

console.log('进来啦？2');

const movieRouter: Router = new Router();

movieRouter.get('/', getAllMovies);

export default movieRouter;
