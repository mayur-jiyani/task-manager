require('../src/db/mongoose')
const Task = require('../src/model/tasks')

// Task.findByIdAndDelete('61dfb79afc921d0636b1adcc').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deteteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deteteTaskAndCount('61dfb59df0b2dbdadb9a2e67', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})