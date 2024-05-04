const prisma = require("../lib/prisma")

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
    const alltasks = await prisma.task.findMany({
        include: {
            author: true
        },
    })
    return alltasks
}

module.exports = { getallTasks, saveTask }