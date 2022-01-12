const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    description: 'task3     ',
    // completed: true
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         required: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is invalid")
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes("password")) {
//                 throw new Error("password doesn't contain 'password'")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("Age must be positive number")
//             }
//         }
//     }
// })

// const me = new User({
//     name: '    shyam ',
//     email: "SHYAM@GMAIL.COM   ",
//     password: "apapap1"
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })