const express = require('express');
const { createTask, getallTasks, saveTask } = require("../controller/task");
const taskRouter = express.Router();

taskRouter.get("/task", async (req, res) => {
    const alltasks = await getallTasks()
    res.json(alltasks)
})
taskRouter.post("/task", async (req, res) => {
    const payload = req.body
    const newtask = await saveTask(payload)
    return res.json(newtask)
})

module.exports = taskRouter;