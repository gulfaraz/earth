var gulp = require('gulp');

gulp.task('default', function () {
    var express = require('express');
    var serveIndex = require('serve-index');

    require('greenlock-express')
    .init(function() {
        return {
            greenlock: require('./greenlock.js'),

            // whether or not to run at cloudscale
            cluster: false
        };
    })
    .serve(function(glx) {
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

        // Serves on 80 and 443
        // Get's SSL certificates magically!
        glx.serveApp(app);
    });
});
