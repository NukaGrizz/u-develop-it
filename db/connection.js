const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        // MySQL username,
        user:'root',
        // Your MySQL password
        password: 'Bondage6969',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;