module.exports.imageChanger = (function (filename, color_r, color_g, color_b, color_a = 1) {
    const fs = require('fs');
    const canvas_saver = require('./canvas_saver.js');
    const Canvas = require('canvas'),
        Image = Canvas.Image;

    const checkColor = function (color){
        return color >= 0 && color < 255;
    }
    if(!checkColor(color_r) || !checkColor(color_g) || !checkColor(color_b)){
        throw color_r;
        return -1;
    }

    const data = fs.readFileSync(__dirname + '/' + filename, function (err, data) {
        if (err) throw err;

        const img = new Image;
        img.src = data;
        const canvas = new Canvas.Canvas(img.width, img.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        let imagedata = ctx.getImageData(0, 0, img.width, img.height);

        for (let y = 0; y < imagedata.height; y++) {
            for (let x = 0; x < imagedata.width; x++) {
                var index = (y * imagedata.width + x) * 4;
                imagedata.data[index]       = color_r;
                imagedata.data[index + 1]   = color_g;
                imagedata.data[index + 2]   = color_b;
                // imagedata.data[index+3] = color_a;
            }
        }

        ctx.putImageData(imagedata, 0, 0);

        // データを保存
        // canvas_saver.save(canvas, "huku4.png", function () {
        //     console.log("img saved");
        // });
        return canvas.toDataURL().split(',')[1];
    });
    return Buffer.from(data).toString("base64");
    return "";
});
