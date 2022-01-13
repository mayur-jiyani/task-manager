require('../src/db/mongoose')
const User = require('../src/model/users')

// User.findByIdAndUpdate('61debcd88fe9defd2f82bb58', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61dfb0e84474116844f84292', 1).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})