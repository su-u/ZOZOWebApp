/**
 * レスポンスデータの生成
 * 生成ミス削減の為
 * @param {*} statuCode ステータスコード
 * @param {*} message メッセージ
 * @param {*} r R値
 * @param {*} g G値
 * @param {*} b B値
 * @returns
 */
const CreateResponse = (statuCode, message, r, g, b) =>{
    return [statuCode, message, r, g, b];
}

/**
 * カラーコードを受け取り、r,g,b値を返す。
 * 問題がある場合は、エラーメッセージを返す。
 * @param {*} color 処理するカラーコード
 * @returns [値に対するステータスコード, メッセージ, R値, G値, B値]
 */
const checkColorValue = (color) => {
    if (!color) {
        return CreateResponse(-1, 'color is empty.', 0, 0, 0);
    }

    if (color.length != 6) {
        return CreateResponse(-1, 'The number of characters in the color value is not 6.', 0, 0, 0);
    }

    const segments = color.match(/.{2}/g);
    const r = parseInt(segments[0], 16);
    const g = parseInt(segments[1], 16);
    const b = parseInt(segments[2], 16);

    if (isNaN(r)) {
        return CreateResponse(-1, 'R is NaN.', 0, 0, 0);
    }
    if (r < 0 || r > 255) {
        return CreateResponse(-1, 'The value of R is out of range.', 0, 0, 0);
    }
    if (isNaN(g)) {
        return CreateResponse(-1, 'G is NaN.', 0, 0, 0);
    }
    if (g < 0 || g > 255) {
        return CreateResponse(-1, 'The value of G is out of range.', 0, 0, 0);
    }
    if (isNaN(b)) {
        return CreateResponse(-1, 'B is NaN.', 0, 0, 0);
    }
    if (b < 0 || b > 255) {
        return CreateResponse(-1, 'The value of B is out of range.', 0, 0, 0);
    }

    //OK
    return CreateResponse(1, '', r, g, b);
}

module.exports = checkColorValue;
