const request = require('supertest');
const app = require('../src/app')
const User = require('../src/model/users')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { response } = require('../src/app');

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'dhruv',
    email: 'dhruv@gmail.com',
    password: 'bjhbjhbjh',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Mayur',
        email: 'smartduniya27@gmail.com',
        password: 'mayur123'
    }).expect(201)

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Mayur',
            email: 'smartduniya27@gmail.com',
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('mayur123')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)

})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: "ggghbjhbjbjb"
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile unauthenticated for user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    //assert that user is deleted
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should delete account for unauthorize user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})
