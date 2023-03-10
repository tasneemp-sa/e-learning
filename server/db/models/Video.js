const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Video = db.define("video", {
  video_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  video_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  video_length: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Video;

