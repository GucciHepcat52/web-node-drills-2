const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getInfo: (req, res) => {
    sequelize
      .query(
        `
            SELECT * FROM input;
        `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  postInfo: (req, res) => {
    const { text } = req.body;
    sequelize
      .query(
        `
        INSERT INTO input
        (text)
        VALUES
        ('${text}');
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
};
