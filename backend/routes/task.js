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
    // res.json(
    //     [{ 
    //         "id": 1,
    //         "title": "test-10",
    //         "message": 'test sa /taskss' 
    //     },
    //     { 
    //         "id": 2,
    //         "title": "test-11",
    //         "message": 'test sa /taskss' 
    //     }]
    // );
})
taskRouter.get('/api/message', (req, res) => { 
    res.json({ message: 'test' }); 
});

module.exports = taskRouter;