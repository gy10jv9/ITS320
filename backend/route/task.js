const express = require('express')
const { default: createTask } = require("../controller/task")

const taskRouter = express.Router()

taskRouter.post("/tasks", async (req, res) => {
    const payload = req.body
    const newPost = await createTask(payload)
    return res.json(newPost)

})

module.exports = taskRouter