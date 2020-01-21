const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysql'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SHOW DATABASES;', function (error, results) {
    if (error) throw error;
    console.log('Result: ', results);
});

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});