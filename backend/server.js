const express = require('express'); 
const { PrismaClient } = require('@prisma/client');
const taskRouter = require('./routes/task');

const prisma = new PrismaClient();
const app = express(); 

app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
});
app.use(express.json());
app.use(taskRouter)

const port = process.env.PORT || 3000
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); 
});