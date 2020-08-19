const express = require("express");

const users = require("./users");
const emojis = require("./emojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/users", users);
router.use("/emojis", emojis);

module.exports = router;
