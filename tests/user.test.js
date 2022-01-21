const request = require('supertest');
const app = require('../src/app')
const User = require('../src/model/users')

const userOne = {
    name: 'dhruv',
    email: 'dhruv@gmail.com',
    password: 'bjhbjhbjh'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Mayur',
        email: 'smartduniya27@gmail.com',
        password: 'mayur123'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: "ggghbjhbjbjb"
    }).expect(400)
})