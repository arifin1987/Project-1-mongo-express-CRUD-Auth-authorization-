const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/my-student-3')
.then(()=>console.log("mongodb connected successfully"))
.catch(err=>console.log("connection failed"))



const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})