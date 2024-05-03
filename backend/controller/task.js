const prisma = require("../lib/prisma")

// const createTask = async (payload) => {
//     console.log(payload)
//     const newtask = await prisma.task.create({
//         data: {
//             title: payload.title
//         }
//     })
//     return newtask
// }
const saveTask = async (data) => {
    console.log(data)
}

const getallTasks = async () => {
    const gettasks = await prisma.task.findMany()
    return gettasks
}

module.exports = { getallTasks, saveTask }