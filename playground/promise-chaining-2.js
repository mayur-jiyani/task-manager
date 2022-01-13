require('../src/db/mongoose')
const Task = require('../src/model/tasks')

Task.findByIdAndDelete('61dfb79afc921d0636b1adcc').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})