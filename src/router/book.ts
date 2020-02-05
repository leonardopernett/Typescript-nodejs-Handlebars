import {Router} from 'express'
const router:Router = Router();

import {bookController} from '../controllers/BookController'


router.route('/books').get(bookController.getBooks);
router.route('/add-books').get(bookController.addBooks);
router.route('/save-books').post(bookController.saveBooks);


export default router
