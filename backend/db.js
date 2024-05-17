const express=require('express');
const mysql=require('mysql2');
const cors = require('cors');
const app = express();
const port = 3306;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // React app's address
}));


// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qqweasd@1234',
    database: 'hospital'
  });
  
const connectToMysql=()=>{

    db.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }
      console.log('Connected to MySQL');
    });
}
  
module.exports= connectToMysql;
 
