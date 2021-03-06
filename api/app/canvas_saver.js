module.exports = (function () {
    "use strict";

    const fs = require('fs');

    const canvas_to_base64 = function (canvas) {
        return canvas.toDataURL().split(',')[1];
    }

    const decode_and_copy = function (string, filename, callback) {
        let buffer = new Buffer.from(string, 'base64');
        fs.writeFile(filename, buffer, callback);
    }

    return {
        save: function (canvas, name, callback) {
            decode_and_copy(
                canvas_to_base64(canvas),
                name,
                callback
            );
        }
    }

})();