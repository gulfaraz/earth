var gulp = require("gulp");

gulp.task("default", function () {
    var express = require("express");
    var app = express();
    app.use(express.static(__dirname + '/node_modules'));
    //, require('./routes/routes')(express));
    app.get('/font', function (req, res) {
        res.sendFile(__dirname + '/font.ttf');
    });
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });
    app.listen(8080);
});
