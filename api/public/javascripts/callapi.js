const createPickr = (elementId) =>
{
    return Pickr.create({
        el: elementId,
        theme: 'nano',
        default: 'ff00ff',
        components: {

            preview: true,
            hue: true,

            interaction: {
                save: true
            },
            output: {
                hex: true,
                input: true
            }
        }
    });
}

const pickr = createPickr('.bottoms-color-picker');

pickr.on('save', (color, instance) => {
    console.log('save', color, instance);
    document.getElementById('bottoms-color').value = color.toHEXA().toString().replace('#', '');
}).on('change', (color, instance) => {
    console.log('change', color, instance);
    document.getElementById('bottoms-color').value = color.toHEXA().toString().replace('#', '');
});


const callApi = (callUrl, formElementId, imgElementId) =>{
    const formData = new FormData(document.getElementById(formElementId));
    const params = new URLSearchParams(formData);
    fetch(callUrl + params.toString())
        .then(response => {
            return response.text();
        })
        .then(body => {
            var elem = document.getElementById(imgElementId);
            elem.src = body;
            console.log(body);
        });
}

$(function () {
    $('#tops-api').click(function () {
        callApi('/api/v1/tops?', 'tops-form', 'tops-img');
    });
    $('#bottoms-api').click(function () {
        callApi('/api/v1/bottoms?', 'bottoms-form', 'bottoms-img');
    });
    $('#shoes-api').click(function () {
        callApi('/api/v1/shoes?', 'shoes-form', 'shoes-img');
    });
});

