const CreateResponse = (statusCode, message, path) => {
    return [statusCode, message, path];
}

const getTopsImg = (type) => {
    //無地, しま模様, ボーダー, 水玉
    const file = ['./img/IMG_0771_c.PNG', './img/IMG_0837_c.PNG', './img/IMG_0769_c.PNG', './img/IMG_0838_c.PNG'];

    if (type == null) {
        return CreateResponse(-1, 'type is empty.', '');
    }

    const path = file[type];
    if (path == undefined) {
        return CreateResponse(-1, 'type is out of range.', '');
    }
    return CreateResponse(1, '', path);
}


const getBottomsImg = (type) => {
    const file = ['./img/IMG_0774_c.PNG', './img/IMG_0775_c.PNG'];

    if (type == null) {
        return CreateResponse(-1, 'type is empty.', '');
    }

    const path = file[type];
    if (path == undefined) {
        return CreateResponse(-1, 'type is out of range.', '');
    }
    return CreateResponse(1, '', path);
}

const getShoesImg = (type) => {
    const file = ['./img/IMG_0773_c.PNG'];

    if (type == null) {
        return CreateResponse(-1, 'type is empty.', '');
    }

    const path = file[type];
    if (path == undefined) {
        return CreateResponse(-1, 'type is out of range.', '');
    }
    return CreateResponse(1, '', path);
}

module.exports.getTopsImg = getTopsImg;
module.exports.getBottomsImg = getBottomsImg;
module.exports.getShoesImg = getShoesImg;
