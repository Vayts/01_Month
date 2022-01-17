const {} = require('../src/task2')

describe('Number.proto', () => {
    test('2', () => {
        expect((2).isOdd).toBeDefined()
    })
    test('2', () => {
        expect((2).isOdd()).toBe(true)
    })
    test('3', () => {
        expect((3).isOdd()).toBe(false)
    })
})