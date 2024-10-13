

const express = require('express');
const viewengine = require('./config/engineview');
const router = require('./routes/web');
const app = express();
require('dotenv').config();
app.use(express.json());
const connection = require('./config/database');
app.use(express.urlencoded());

const port = process.env.HTTPPORT || 8888;//config port into 
const hostname = process.env.hostname;


//config view engine and static file
viewengine(app);

//route
app.use('/', router);//no phai dung use chu del phai dung get hay post






app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

