require('../src/db/mongoose')
const User = require('../src/model/users')

User.findByIdAndUpdate('61debcd88fe9defd2f82bb58', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})