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