const createPickr = (elementId) => {
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

const setColorValue = (elemetId, colorString) => {
    document.getElementById(elemetId).value = colorString.replace('#', '');
}

const callApi = (callUrl, formElementId, imgElementId) => {
    const formData = new FormData(document.getElementById(formElementId));
    const params = new URLSearchParams(formData);
    fetch(callUrl + params.toString())
        .then(response => {
            return response.text();
        })
        .then(body => {
            var elem = document.getElementById(imgElementId);
            console.log(body);
            responseJson = JSON.parse(body);
            elem.src = responseJson.response;
        });
}

//tops
const topsElementId = 'tops-color'
const topsPicker = createPickr('#' + topsElementId + '-picker');

topsPicker.on('save', (color, instance) => {
    setColorValue('tops-color', color.toHEXA().toString());
}).on('change', (color, instance) => {
    setColorValue('tops-color', color.toHEXA().toString());
});

//bottoms
const bottomsElementId = 'bottoms-color'
const bottomsPicker = createPickr('#' + bottomsElementId + '-picker');

bottomsPicker.on('save', (color, instance) => {
    setColorValue(bottomsElementId, color.toHEXA().toString());
}).on('change', (color, instance) => {
    setColorValue(bottomsElementId, color.toHEXA().toString());
});

//shoes
const shoesElementId = 'shoes-color'
const shoesPicker = createPickr('#' + shoesElementId + '-picker');

shoesPicker.on('save', (color, instance) => {
    setColorValue(shoesElementId, color.toHEXA().toString());
}).on('change', (color, instance) => {
    setColorValue(shoesElementId, color.toHEXA().toString());
});

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

