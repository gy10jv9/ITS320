const { connect } = require("http2")
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
    const saveTask = await prisma.task.create({
        data: {
            description: data.description,
            id_owner: data.id_owner
        }
    })

    console.log(`Successfully added: ${JSON.stringify(data, null, 4)}`)

    return saveTask
}

const getallTasks = async () => {
    // const alltasks = await prisma.task.findMany()
    // return alltasks
}

module.exports = { getallTasks, saveTask }