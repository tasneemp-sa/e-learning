const Sequelize = require("sequelize");
const db = require("../db");

const User_Book_Progress = db.define("user_book_progress", {
  page_no: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User_Book_Progress;