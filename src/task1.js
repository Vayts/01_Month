function getDays(year, month) {

    if (typeof year !== "number") {
        return 'Invalid input data'
    }

    if (month === null) {
        return "Invalid input data"
    }


    if (isNaN(Number(month))) {
        const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        month = arr.indexOf(month)

        if (month === -1) {
            return 'Invalid input data'
        }

    } else {
        month = Number(month) + 1
    }

    const date = new Date(year, month, 1)
    const date2 = new Date(year, month + 1, 1)
    return Math.round((date2 - date) / 86400000)
}

console.log(getDays(2021, '4'))

module.exports = {getDays}