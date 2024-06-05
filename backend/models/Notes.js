const db=require('../db');

const createNotesTable=
`CREATE TABLE IF NOT EXIST notes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL ,
    tag VARCHAR(30) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

db.query(createNotesTable,(err,res)=>{
    if(err)
    {
        console.error("Error in Creating Notes Table",err);
    }
    console.error("Notes Table created Sucessfully");
});

const getAllNotes=callback=>{
    db.query('SELECT * FROM notes',(err,res)=>{
        if(err)
        {
            return callback(err);
        }
        callback(null,res);
    });
};

const insertIntoNotes = (user, callback) => {
    const { name, email,password } = user;
    db.query('INSERT INTO users (title, description,tag) VALUES (?, ?, ?)', [title, description,tag], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  };
  
  module.exports = {
    getAllNotes,
    insertIntoNotes,
  };