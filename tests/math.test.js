const { add } = require('../src/math');

// test('Hello mayur', () => {

// })


// test('Failed', () => {
//     throw new Error('Failure!')
// })

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000);

// })

test('Should add two number', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add two number', async () => {
    const sum = await add(10, 10)
    expect(sum).toBe(20)
})