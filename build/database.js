"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const key_1 = require("./key");
function connection() {
    mongoose_1.connect(key_1.mongodb.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db => console.log("db is connected"))
        .catch(err => console.log(err));
}
exports.connection = connection;
