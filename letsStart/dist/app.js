"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware");
    next();
});
app.get("/", function (req, res) {
    console.log(req);
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/a", function (req, res) {
    res.send({ a: app_model_1.Cat[0] });
});
app.get("/cats/d", function (req, res) {
    res.send({ d: app_model_1.Cat[3] });
});
app.use(function (req, res, next) {
    console.log("this is error middleware");
    res.send({ error: "404 not found error" });
});
app.listen(8000, function () {
    console.log("server is on..");
});
//# sourceMappingURL=app.js.map