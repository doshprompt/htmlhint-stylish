# htmlhint-stylish

Stylish reporter for [htmlhint](https://htmlhint.com),
uses [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) to do the actual reporting.

## Install

```
$ npm install --save-dev htmlhint-stylish
```

## Usage

### [gulp-htmlhint](https://www.npmjs.com/package/gulp-htmlhint)

```js
var gulp = require('gulp'),
    stylish = require('htmlhint-stylish');

gulp.task('default', function () {
    gulp.src(['index.html'])
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter(stylish));
```

## License

MIT © [Rahul Doshi](http://twitter.com/doshprompt)
