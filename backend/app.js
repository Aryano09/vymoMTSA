require('dotenv').config();
const express = require('express');
const userRouter = require('./api/user/user.router');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter); 


app.listen(process.env.APP_PORT, () => {
    console.log('server is working');
});