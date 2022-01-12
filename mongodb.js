const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id)
// console.log(id.toHexString())
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to database")
    }
    const db = client.db(databaseName)


    // db.collection('user').deleteOne({
    //     _id: new ObjectID("61dd73158eba802daccf6245")
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('user').deleteMany({
        age: 21
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    // db.collection('task').updateOne({
    //     _id: new ObjectID("61de53cfe8ff66257c906cdd")
    // }, {
    //     $set: {
    //         completed: false
    //     }

    //     // $inc: {
    //     //     age: 1
    //     // }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').findOne({ _id: new ObjectID("61de53cfe8ff66257c906cde") }, (error, users) => {
    // if (error) {
    //     return console.log("unable to fetch")
    // }

    //     console.log(users)
    // })

    // db.collection('task').find({ completed: false }).toArray((error, result) => {
    //     console.log(result)
    // })


    // db.collection("user").insertOne({
    //     _id: id,
    //     name: "vikram",
    //     age: 46
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert user")
    //     }

    //     console.log(result.ops)
    // });

    // db.collection("task").insertMany([
    //     {
    //         description: "task1",
    //         completed: true
    //     }, {
    //         description: "task2",
    //         completed: false
    //     }, {
    //         description: "task1",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert user")
    //     }

    //     console.log(result.ops)
    // });
})