const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const User = require("../model/User");

router.get("/users/all/city", async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [
        "city",
        [sequelize.fn("COUNT", sequelize.col("city")), "n_users"],
      ],
      group: "city",
    });
    res.send(user);
  } catch (err) {
    return res.send({ error: err.message });
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
    });
    res.send(user);
  } catch (err) {
    return res.send({ error: err.message });
  }
});
router.get("/users/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const user = await User.findAll({
      where: { city: city },
    });
    res.send(user);
  } catch (err) {
    return res.send({ error: err.message });
  }
});

router.post("/user", async (req, res) => {
  try {
    const { id, first_name, last_name, email, gender, company, city, title } =
      req.body;
    const user = await User.update(
      {
        first_name,
        last_name,
        email,
        gender,
        company,
        city,
        title,
      },
      {
        where: { id: id },
      }
    );
    console.log(user);
    res.send(user);
  } catch (err) {
    return res.send({ error: err.message });
  }
});

module.exports = router;
