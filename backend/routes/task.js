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
    console.log(gettasks)
    res.json(gettasks)
})

taskRouter.get('/api/message', (req, res) => { 
    res.json({ message: 'test' }); 
});

module.exports = taskRouter;