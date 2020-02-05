"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    home(req, res) {
        res.render('index');
    }
    about(req, res) {
        res.render('about');
    }
}
exports.indexController = new IndexController();
