const express = require('express');

const router_owner = express.Router();

taskRouter.post("/owner/add", async (req, res) => {
    const payload = req.body
    const newPost = await createTask(payload)
    return res.json(newPost)
})
