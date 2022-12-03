const express = require('express');
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter')

const app = express();
app.use(express.json());

app.use('/api/student', studentRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


module.exports= app;