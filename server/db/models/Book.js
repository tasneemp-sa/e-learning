const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Book = db.define("book", {
  book_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  book_data: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  book_length: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Book;

