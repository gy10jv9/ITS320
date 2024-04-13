const express = require('express'); 
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express(); 
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
// handling CORS 
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin",  
               "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers",  
               "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
}); 

// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => { 
    res.json({ message:  
        'Hello GEEKS FOR GEEKS Folks from the Express server!' }); 
}); 
  
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); 
});