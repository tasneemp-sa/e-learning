const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Course = db.define("course", {
  course_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  overview: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  meant_for: {
    type: Sequelize.STRING,
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
});

module.exports = Course;

