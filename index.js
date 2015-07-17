var stylish = require('jshint-stylish');

module.exports = function(file) {
    stylish.reporter(file.htmlhint.messages.map(function(errMsg) {
        return {
            file: errMsg.file,
            error: {
                character: errMsg.error.col,
                code: errMsg.error.rule.id,
                line: errMsg.error.line,
                reason: errMsg.error.message
            }
        }
    }));
};