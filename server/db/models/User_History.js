const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const User_History = db.define("user_history", {
  last_opened: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = User_History;

