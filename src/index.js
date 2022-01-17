const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const b = require("bcryptjs")

const f = async () => {
    const p = 'mayur'
    const h = await b.hash(p, 8)
    console.log(p);
    console.log(h);
    console.log(await b.compare('1mayur', h));
}
f()

app.listen(port, () => {
    console.log("server is up on port" + port)
})