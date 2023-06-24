const user = require("../services/user");
const AppError = require("../utils/appError");
const { hashPassword, validatePassword } = require("../utils/utils");

const createUser = (req, res, next) => {
  const data = req.body;
  data.password = hashPassword(data.password);
  user
    .insertUser(data)
    .then((row) => {
      res
        .status(201)
        .json({ status: 201, message: "Success", data: { id: row.insertId } });
    })
    .catch((err) => {
      if (err.includes("ER_DUP_ENTRY"))
        next(new AppError(`Username already taken`, 400));
      else next(new AppError(`Internal Server Error`, 500));
    });
};

const authenticateUser = (req, res, next) => {
  const data = req.body;
  user
    .authenticate(data)
    .then((userData) => {
      if(userData?.length==0){
        next(new AppError(`User not found. Please register`, 400));
      }
      if (validatePassword(data.password, userData[0].password))
        res.status(200).json({
          id: userData[0]?.id,
          status: 200,
          message: "Success",
          data: "Logged in successfully",
        });
      else next(new AppError(`Password is incorrect`, 400));
    })
    .catch((err) => {
      console.log(err);
      next(new AppError(`Internal Server Error`, 500));
    });
};

const getDetails = async (req, res, next) => {
  user
    .getAllUsers()
    .then((users) => {
      res.status(200).json({ status: 200, message: "Success", data: users });
    })
    .catch((err) => {
      console.log(err);
      next(new AppError(`Internal Server Error`, 500));
    });
};

module.exports.createUser = createUser;
module.exports.authenticateUser = authenticateUser;
module.exports.getDetails = getDetails;
