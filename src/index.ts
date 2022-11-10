import cors from "cors";
import express from "express";
import bookRouter from "./routes/BookRoutes";

const app = express();
app.use(express.json()); // on paramètre la possibilité de récupérer des info dans un body en format JSON
app.use(
  cors({
    origin: "*", // 'http://localhost:3000'

    methods: ["GET", "POST", "PUT", "DELETE"], // on paramètre le fait qu'une appli puisse faire des requête avec ces méthodes référencées
  })
);
app.use("/api/books", bookRouter);
app.listen(8080, () => {
  console.log(`L'api est en route sur l'adresse localhost:8080`);
});
