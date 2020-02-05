import { Request, Response } from "express";

import  Books from '../model/Books'

class BookController {

  public async  getBooks(req: Request, res: Response) {
      const books = await Books.find({});
      res.render('books/index', { 
          title: 'Books',
          books
      });

  }
  public addBooks(req: Request, res: Response) {
       res.render('books/add.hbs')
  }
  public  async saveBooks(req: Request, res: Response) {
      const {title,author, isbn} =  req.body
      const newBook = {
        title,
        author,
        isbn
      }
       const books = new Books(newBook);
       await books.save();
       res.redirect('/books')
  }
}
export const bookController = new BookController();
