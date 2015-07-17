var gulp = require('gulp'),
    util = require('gulp-util'),
    htmlhint = require('gulp-htmlhint'),
    vinyl = require('vinyl-fs'),
    assert = require('assert'),
    stylish = require('./');

it('should be used by gulp-htmlhint', function(done) {
    var err = false,
	    log = process.stdout.write.bind(process.stdout);

	process.stdout.write = function (str) {
        log(str);

        if (/Doctype must be first/ig.test(util.colors.stripColor(str || ''))) {
            err = true;
        }
	};

    vinyl
        .src('fixture.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter(stylish))
        .on('data', function() {
            process.stdout.write = log;
            assert(err);
            done();
        });
});