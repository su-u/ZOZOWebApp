const checkTypeValue = (type) => {
    if (type) {
        return [1, '', type];
    } else {
        return [-1, 'type is empty.', ''];
    }
}

module.exports = checkTypeValue;