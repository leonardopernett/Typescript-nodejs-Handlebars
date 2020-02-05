import express, { Application } from "express";
import morgan from "morgan";
import hbs from "express-handlebars";
import path from "path";

const app:Application = express();

import bookRouter from './router/book'
import indexRouter from './router/index'

//mongoose
import {connection} from './database'

connection()
//configure
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use(bookRouter);
app.use(indexRouter);

app.use(express.static(path.join(__dirname,'public/')));

//server
async function main() {
  await app.listen(app.get("port"));
  console.log("server on port 3000");
}

main();
