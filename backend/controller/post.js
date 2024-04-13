import prisma from "../lib/prisma";

export const createtodo = async (payload) => {
    const newtodo = await prisma.task.create({
        data: {
            title: "test"
        }
    })
    return newtodo
}