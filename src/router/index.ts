import {Router} from 'express'
const router:Router = Router();
import {indexController} from '../controllers/IndexController'

router.route('/').get(indexController.home)
router.route('/about').get(indexController.about);

export default router
