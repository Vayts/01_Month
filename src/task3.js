function every(arr, func) {

    if (!Array.isArray(arr)) {
        return 'Invalid input data'
    }

    if (typeof func !== "function") {
        return 'Invalid input data'
    }

    let result = true;

    arr.forEach(el => {
        if (func(el) === false) {
            result = false;
        }
    })
    return result
}

module.exports = {every}