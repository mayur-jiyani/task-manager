const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET is disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('site under maintenance')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("server is up on port" + port)
})

// const jwt = require('jsonwebtoken');

// const myfunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'kjhhhhiuunu', { expiresIn: '7 days' })
//     console.log(token);

//     const data = jwt.verify(token, 'kjhhhhiuunu')
//     console.log(data);

// }
// myfunction()

// const Task = require('./model/tasks')
// const User = require('./model/users');

// const main = async () => {
//     // const task = await Task.findById('61e660a35b3f66d460c647f2')
//     // // await task.populate('owner').execPopulate() //for v5
//     // await task.populate('owner')  //for v6
//     // console.log(task.owner);

//     const user = await User.findById('61e688576f201f771bf270e4')
//     await user.populate('tasks')
//     console.log(user.tasks);

// }

// main()