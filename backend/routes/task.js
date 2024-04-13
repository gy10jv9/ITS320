const express = require('express');
const { createTask, getallTasks } = require("../controller/task");
const taskRouter = express.Router();

taskRouter.post("/tasks", async (req, res) => {
    const payload = req.body
    const newPost = await createTask(payload)
    return res.json(newPost)
})
taskRouter.get("/tasks", async (req, res) => {
    const gettasks = await getallTasks()
    return res.json(gettasks)
})

module.exports = taskRouter;