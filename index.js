"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    console.log("This is the hompage route at the backend");
    res.send('Hello this is homepage');
});
app.get('/twitter', function (req, res) {
    console.log("This is the twitter backend.");
    res.send("This is the twitter api");
});
app.listen((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT, function () {
    console.log("App is running at port ".concat(port));
});
