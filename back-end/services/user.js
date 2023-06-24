const conn = require("./db").conn;

const insertUser = (user) => {
  const sql = `INSERT INTO user (username,password,name,isActive) VALUES (?,?,?,?)`;
  let params = [];
  for (keys in user) {
    params.push(user[keys]);
  }
  params.push(true);
  const promise = new Promise((resolve, reject) => {
    conn.query(sql, params, (err, result) => {
      if (err) {
        reject(err.message);
      }
      resolve(result);
    });
  });
  return promise;
};

const getAllUsers = () => {
  const promise = new Promise((resolve, reject) => {
    const sql = ` SELECT id,name,username FROM user `;
    conn.query(sql, (err, result) => {
      if (err) {
        reject(err.message);
      }
      resolve(result);
    });
  });
  return promise;
};

const authenticate = (user) => {
  const sql = `SELECT * FROM user WHERE username=? `;
  const promise = new Promise((resolve, reject) => {
    const params = [user.username];
    conn.query(sql, params, (err, result) => {
      if (err) {
        reject(err.message);
      }
      resolve(result);
    });
  });
  return promise;
};

module.exports.insertUser = insertUser;
module.exports.getAllUsers = getAllUsers;
module.exports.authenticate = authenticate;
