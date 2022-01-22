const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/model/users');
const Task = require('../../src/model/tasks');

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

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'ashish',
    email: 'ashish@gmail.com',
    password: 'ahsijdtr',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task1',
    completed: 'true',
    owner: userOne._id,
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task2',
    completed: 'false',
    owner: userOne._id,
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'task3',
    completed: 'false',
    owner: userTwo._id,
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase,

}