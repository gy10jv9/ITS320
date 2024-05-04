const prisma = require("../lib/prisma")

const addowner = async (data) => {
    const addowner = await prisma.user.create({
        data: {
            name: data.name
        }
    })

    console.log(`Successfully added: ${JSON.stringify(data, null, 4)}`)

    return addowner
}

const getallOwners = async () => {
    const allowners = await prisma.user.findMany()
    return allowners
}

module.exports = { addowner, getallOwners }