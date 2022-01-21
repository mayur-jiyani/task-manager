const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/model/users');

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

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase
}