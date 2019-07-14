const getTopsImg = (type) => {
    const file = ['./img/IMG_0771_c.PNG', './img/IMG_0776_c.PNG', './img/IMG_0769_c.PNG'];

    const path = file[type];
    if (path == undefined) {
        return -1;
    }
    return path;
}


const getBottomsImg = (type) => {
    const file = ['./img/IMG_0774_c.PNG', './img/IMG_0775_c.PNG'];

    const path = file[type];
    if (path == undefined) {
        return -1;
    }
    return path;
}

const getShoesImg = (type) => {
    const file = ['./img/IMG_0773_c.PNG'];

    const path = file[type];
    if (path == undefined) {
        return -1;
    }
    return path;
}

module.exports.getTopsImg = getTopsImg;
module.exports.getBottomsImg = getBottomsImg;
module.exports.getShoesImg = getShoesImg;