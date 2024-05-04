const express = require('express');
const { createTask, getallTasks, saveTask } = require("../controller/task");
const taskRouter = express.Router();

// taskRouter.post("/tasks", async (req, res) => {
//     const payload = req.body
//     const newPost = await createTask(payload)
//     return res.json(newPost)
// })

taskRouter.get("/task/get", async (req, res) => {
    const alltasks = await getallTasks()
    res.json(alltasks)
})
taskRouter.post("/task/add", async (req, res) => {
    const payload = req.body
    const newtask = await saveTask(payload)
    return res.json(newtask)
})

// taskRouter.get("/tasks", async (req, res) => {
//     const gettasks = await getallTasks()
//     res.json(gettasks)
// })
// taskRouter.get('/api/message', (req, res) => { 
//     res.json({ message: 'test' }); 
// });

module.exports = taskRouter;