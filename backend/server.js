const express = require('express'); 
const { PrismaClient } = require('@prisma/client');
const taskRouter = require('./routes/task');

const prisma = new PrismaClient();
const app = express(); 

app.use(express.json());
app.use(taskRouter)

const port = process.env.PORT || 3000
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); 
});