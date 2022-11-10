import { Router } from "express";
import BookController from "../controllers/BookController";
const bookRouter = Router();
const bookController = new BookController();
bookRouter.get("/", (req, res) => {
  bookController.getAll(req, res);
});

export default bookRouter;
