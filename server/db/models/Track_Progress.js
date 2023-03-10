const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Track_Progress = db.define("track_progress", {
  type: {
    type: Sequelize.ENUM,
    values: ["in_progress", "completed"]
  },
});

module.exports = Track_Progress;

