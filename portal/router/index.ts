import Router from 'koa-router';
import moviesRouter from './movie'

const router: Router = new Router();

console.log('进来啦？1');


router.use('/api/movie', moviesRouter.routes());

export default router;
