import Book from "../models/interfaces/BookInterface";

class BookService {
  private listBooks: Book[] = [
    {
      id: 1,
      title: "The Hobbit",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
    },
    {
      id: 3,
      title: "The Silmarillion",
    },
    {
      id: 4,
      title: "The Children of Hurin",
    },
    {
      id: 5,
      title: "The Fall of Gondolin",
    },
  ];

  async getAll(): Promise<Book[]> {
    console.log("BookService");
    // A terme il y aura une Requete vers la BDD qui peut prendre du temps donc Asynchrone
    return this.listBooks;
  }
}
export default BookService;
