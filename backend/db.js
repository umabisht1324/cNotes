const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Qqweasd@1234',
  database: 'CloudNotebook'
});

const connectToMysql = () => {
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
};

module.exports = { db, connectToMysql };
