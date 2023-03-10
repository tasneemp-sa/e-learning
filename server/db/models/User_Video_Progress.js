const Sequelize = require("sequelize");
const db = require("../db");

const User_Video_Progress = db.define("user_video_progress", {
  video_length: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = User_Video_Progress;