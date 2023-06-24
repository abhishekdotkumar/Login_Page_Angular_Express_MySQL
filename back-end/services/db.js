const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company",
});

conn.connect();

const createTable = () => {
  conn.query(
    "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255) UNIQUE,password VARCHAR(255), isActive boolean default false )",
    (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("User table created successfully");
      }
    }
  );
};

module.exports.conn = conn;
module.exports.createTable = createTable;

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '159@Ukbmahr';