module.exports.imageChanger = (function (filename, color_r, color_g, color_b, color_a = 1) {
    const fs = require('fs');
    const canvas_saver = require('./canvas_saver.js');
    const Canvas = require('canvas'),
        Image = Canvas.Image;

    const checkColor = function (color){
        return color >= 0 && color < 255;
    }
    if(!checkColor(color_r) || !checkColor(color_g) || !checkColor(color_b)){
        return -1;
    }

    fs.readFile(__dirname + '/' + filename, function (err, data) {
        if (err) throw err;

        var img = new Image;
        img.src = data;
        var canvas = new Canvas.Canvas(img.width, img.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var imagedata = ctx.getImageData(0, 0, img.width, img.height);

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
            console.log("img saved");
        });
    });

    return{
        toString : function (){
            
        }
    }
});
