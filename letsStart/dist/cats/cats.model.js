"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats.model");
app.get('/cats', function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get('/cat/:id', function (req, res) {
    try {
        var params_1 = req.params;
        var cat = cats_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.post('/cats', function (req, res) {
    try {
        var data = req.body;
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
//# sourceMappingURL=cats.model.js.map