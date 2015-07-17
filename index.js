var stylish = require('jshint-stylish'),
    path = require('path');

module.exports = function(file) {
    return stylish.reporter(file.htmlhint.messages.map(function(errMsg) {
        return {
            file: path.relative(file.cwd, errMsg.file),
            error: {
                character: errMsg.error.col,
                code: errMsg.error.rule.id,
                line: errMsg.error.line,
                reason: errMsg.error.message
            }
        }
    }));
};