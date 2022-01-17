
Number.prototype.isOdd = function () {
    return this % 2 === 0
}

console.log(Number(4).isOdd())

module.exports = {Number}