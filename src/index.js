const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

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