const {every} = require('../src/task3')

describe('every', () => {
    test('[2,2,2], func return num > 1', () => {
        expect(every([2,2,2], function (num) {
            return num > 1
        })).toBe(true)
    })
    test('[2,2,2], func return num > 2', () => {
        expect(every([2,2,2], function (num) {
            return num > 1
        })).toBe(true)
    })
    test('[3,2,2], func return num > 2', () => {
        expect(every([3,2,2], function (num) {
            return num > 2
        })).toBe(false)
    })
    test('["Test","Test","Test"], func return string.lenght > 3', () => {
        expect(every(["Test","Test","Test"], function (string) {
            return string.length > 4
        })).toBe(false)
    })
    test('"string", func return string.lenght > 3', () => {
        expect(every('string', function (string) {
            return string.length > 4
        })).toEqual('Invalid input data')
    })
    test('["Test","Test","Test"], "string"', () => {
        expect(every(["Test","Test","Test"], "string")).toEqual('Invalid input data')
    })
})