var gulp = require('gulp');

gulp.task('default', function () {
    var express = require('express');
    var serveIndex = require('serve-index');

    var app = express();
    app.use(express.static(__dirname + '/node_modules'));
    app.use('/share', express.static(__dirname + '/share'));
    app.use('/share', serveIndex(__dirname + '/share'));
    app.get('/font', function (req, res) {
        res.sendFile(__dirname + '/font.ttf');
    });
    app.get('/resume', function (req, res) {
        res.sendFile(__dirname + '/share/gulfarazrahman.pdf');
    });
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });
    app.listen(8080);
});
