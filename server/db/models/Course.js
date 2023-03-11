const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Course = db.define("course", {
  course_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  overview: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  meant_for: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  time_to_complete: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM,
    values: ["book", "video"]
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Course;

