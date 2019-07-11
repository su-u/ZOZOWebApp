module.exports = (function (canvas) {
    "use strict";
    return canvas.toDataURL().split(',')[1];
})();