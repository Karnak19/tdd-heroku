const express = require("express");

const router = express.Router();

const users = [
  {
    id: 1,
    username: "Jane Doe",
    email: "janedoe@gmail.com",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

module.exports = router;
