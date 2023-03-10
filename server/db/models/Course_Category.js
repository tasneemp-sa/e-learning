const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Course_Category = db.define("course_category", {
  course_cat_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Course_Category;

