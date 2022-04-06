require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const { getInfo, postInfo } = require("../server/controller");
const chalk = require("chalk");

app.use(express.json());
app.use(cors());

app.get("/api/info", getInfo);
app.post("/api/info", postInfo);

app.listen(PORT, () => console.log(chalk.blue(`Server is running on port ${PORT}`)));
