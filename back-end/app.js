const express = require("express");
const cors = require("cors");
const db = require("./services/db");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", router);
app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

app.use(errorHandler);

db.createTable();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
