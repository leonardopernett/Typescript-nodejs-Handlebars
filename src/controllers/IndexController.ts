import {Request, Response} from 'express';


class IndexController {
     public home(req:Request, res:Response){
         res.render('index');
     }

     public about(req:Request, res:Response){
        res.render('about');
    }

}



export const indexController = new IndexController();