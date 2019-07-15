// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',

    // swatches: [
    //     'rgba(244, 67, 54, 1)',
    //     'rgba(233, 30, 99, 0.95)',
    //     'rgba(156, 39, 176, 0.9)',
    //     'rgba(103, 58, 183, 0.85)',
    //     'rgba(63, 81, 181, 0.8)',
    //     'rgba(33, 150, 243, 0.75)',
    //     'rgba(3, 169, 244, 0.7)',
    //     'rgba(0, 188, 212, 0.7)',
    //     'rgba(0, 150, 136, 0.75)',
    //     'rgba(76, 175, 80, 0.8)',
    //     'rgba(139, 195, 74, 0.85)',
    //     'rgba(205, 220, 57, 0.9)',
    //     'rgba(255, 235, 59, 0.95)',
    //     'rgba(255, 193, 7, 1)'
    // ],

    components: {

        preview: true,
        hue: true,

        interaction: {
            save: true
        },
        output: {
            hex: true,
            // rgba: true,
            // hsla: true,
            input: true
        }
    },
});
pickr.on('save', (color, instance) => {
    console.log('save', color, instance);
    const str = color.toHEXA().toString();
    document.getElementById('bottoms-color').value = str.replace('#', '');
}).on('change', (color, instance) => {
    console.log('change', color, instance);
    const str = color.toHEXA().toString();
    document.getElementById('bottoms-color').value = str.replace('#', '');
});

$(function () {
    // ［検索］ボタンクリックで検索開始
    $('#tops-api').click(function () {
        const formData = new FormData(document.getElementById('form-tops'));
        const params = new URLSearchParams(formData);
        fetch('http://localhost:3000/api/v1/tops?' + params.toString())
            .then(response => {
                return response.text();
            })
            .then(body => {
                var elem = document.getElementById("tops-img");
                elem.src = body;
                console.log(body);
            });
    });
    $('#bottoms-api').click(function () {
        const formData = new FormData(document.getElementById('form-bottoms'));
        const params = new URLSearchParams(formData);
        fetch('http://localhost:3000/api/v1/bottoms?' + params.toString())
            .then(response => {
                return response.text();
            })
            .then(body => {
                var elem = document.getElementById("bottoms-img");
                elem.src = body;
                console.log(body);
            });
    });
    $('#shoes-api').click(function () {
        const formData = new FormData(document.getElementById('form-shoes'));
        const params = new URLSearchParams(formData);
        fetch('http://localhost:3000/api/v1/shoes?' + params.toString())
            .then(response => {
                return response.text();
            })
            .then(body => {
                var elem = document.getElementById("shoes-img");
                elem.src = body;
                console.log(body);
            });
    });
});

