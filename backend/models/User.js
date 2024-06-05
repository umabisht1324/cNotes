const { db } = require('../db');

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

// Ensure the table is created
// db.query(createUserTable, (err, res) => {
//   if (err) {
//     console.error('Error creating users table:', err);
//   } else {
//     console.log('Users table created successfully');
//   }
// });

const getAllUsers = (callback) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res);
  });
};

const createUser = (user, callback) => {
  const { name, email, password } = user;
  db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

const authenticate=(user,callback)=>{
  const{name,email,password}=user;
  db.query('SELECT * FROM users WHERE name=? AND email=? AND password=?',[name,email,password],(err,res)=>{
    if(err)
    {
      return callback(err);
    }
    if(res.length==0)
    {
      return callback("Please Register Yourself!!!");
    }
    callback(null,'Welcome!!!');
  });
};

module.exports = {
  getAllUsers,
  createUser,
  authenticate
};
