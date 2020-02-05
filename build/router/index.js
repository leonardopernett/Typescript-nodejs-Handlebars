"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const IndexController_1 = require("../controllers/IndexController");
router.route('/').get(IndexController_1.indexController.home);
router.route('/about').get(IndexController_1.indexController.about);
exports.default = router;
