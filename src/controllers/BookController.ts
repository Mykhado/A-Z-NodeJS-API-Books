import { Request, Response } from "express";
import BookService from "../services/BookService";
class BookController {
  private bookService = new BookService();
  async getAll(req: Request, res: Response) {
    const books = await this.bookService.getAll();
    res.send({ status: "OK", data: books });
  }
}
export default BookController;
