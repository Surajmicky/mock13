const express = require('express');
const connect = require('./src/configs/db');
const cors = require('cors')
const app = express();
const loginRouter=require('./src/controllers/login');
const registerRouter=require('./src/controllers/register');
app.use(express.json())
app.use(cors())


app.use(loginRouter);
app.use(registerRouter);






const port = 5000
app.listen(port, async () => {
    await connect();
    console.log(`listening on ${port}`);
});

