const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    port: process.env.port,
    waitForConnections: true,
    connectionLimit: 10,


});

module.exports=connection