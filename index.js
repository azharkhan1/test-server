const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const users = require("./data.json");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/user", (req, res, next) => {
  console.log("query", req.query);
  res.send({
    message: "users data success",
    users,
  });
});

app.get("/user/:id", (req, res, next) => {
  let user = users.filter((user) => user.id == req.params.id);
  console.log("params", req.params, user);
  let message =
    user.length > 0
      ? "User fetched successfully"
      : "no user found with this id";

  res.send({
    message,
    user,
  });
});

app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});
