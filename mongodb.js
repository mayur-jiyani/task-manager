const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to database")
    }
    const db = client.db(databaseName)
    db.collection("user").insertOne({
        name: "mayur",
        age: 21
    });
})