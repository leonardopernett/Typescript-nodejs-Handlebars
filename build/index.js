"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const book_1 = __importDefault(require("./router/book"));
const index_1 = __importDefault(require("./router/index"));
//mongoose
const database_1 = require("./database");
database_1.connection();
//configure
app.set("port", process.env.PORT || 3000);
app.set("views", path_1.default.join(__dirname, "views"));
app.engine(".hbs", express_handlebars_1.default({
    defaultLayout: "main",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials"),
    extname: ".hbs",
}));
app.set("view engine", ".hbs");
//middleware
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//router
app.use(book_1.default);
app.use(index_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public/')));
//server
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield app.listen(app.get("port"));
        console.log("server on port 3000");
    });
}
main();
