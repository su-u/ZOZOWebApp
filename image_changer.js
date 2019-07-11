module.exports.imageChanger = (function (color_r, color_g, color_b, color_a = 1) {
    var fs = require('fs');

    var canvas_saver = require('./canvas_saver.js');

    // node-canvas
    var Canvas = require('canvas'),
        Image = Canvas.Image;

    fs.readFile(__dirname + '/huku.PNG', function (err, data) {
        if (err) throw err;

        // データをcanvasのcontextに設定
        var img = new Image;
        img.src = data;
        var canvas = new Canvas.Canvas(img.width, img.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var imagedata = ctx.getImageData(0, 0, img.width, img.height);

        // 画像加工(擬似モノクロ化)
        for (var y = 0; y < imagedata.height; y++) {
            for (var x = 0; x < imagedata.width; x++) {
                var index = (y * imagedata.width + x) * 4;
                imagedata.data[index]       = color_r;
                imagedata.data[index + 1]   = color_g;
                imagedata.data[index + 2]   = color_b;
                // imagedata.data[index+3] = color_a;
            }
        }

        ctx.putImageData(imagedata, 0, 0);

        // データを保存
        canvas_saver.save(canvas, "huku2.png", function () {
            console.log("画像保存完了したよ!!");
        });
    });
});
