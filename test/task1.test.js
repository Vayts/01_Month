const {getDays} = require('../src/task1')

describe('getDays', () => {
    test('2021, 4', () => {
        expect(getDays(2021, 4)).toBe(30)
    })
    test('2021, "4"', () => {
        expect(getDays(2021, '4')).toBe(30)
    })
    test('2021, "April"', () => {
        expect(getDays(2021, 'April')).toBe(30)
    })
    test('"string", "April"', () => {
        expect(getDays('string', 'April')).toBe('Invalid input data')
    })
    test('2021, "April1"', () => {
        expect(getDays(2021, 'April1')).toBe('Invalid input data')
    })
    test('null, "April1"', () => {
        expect(getDays(null, 'April1')).toBe('Invalid input data')
    })
    test('2212, null', () => {
        expect(getDays(2212, null)).toBe('Invalid input data')
    })
})