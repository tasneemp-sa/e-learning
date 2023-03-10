const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Course_Sub_Category = db.define("course_sub_category", {
  course_sub_cat_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Course_Sub_Category;

