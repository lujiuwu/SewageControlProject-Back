const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cy050127',
    database: 'sewagecontrol'
})

module.exports = db