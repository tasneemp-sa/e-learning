//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Course = require("./models/Course");
const Course_Category = require("./models/Course_Category");
const Course_Sub_Category = require("./models/Course_Sub_Category");
const Video = require("./models/Video");
const Book = require("./models/Book");
const Track_Progress = require("./models/Track_Progress");
const User_History = require("./models/User_History");
const User_Book_Progress = require("./models/User_Book_Progress");
const User_Video_Progress = require("./models/User_Video_Progress");

//associations could go here!

User.belongsToMany(Course, {through: 'User_Course'});
Course.belongsToMany(User, {through: 'User_Course'});

Course_Category.hasMany(Course_Sub_Category);
Course_Sub_Category.belongsTo(Course_Category);

Course_Sub_Category.hasMany(Course);
Course.belongsTo(Course_Sub_Category);

Course.hasOne(Book);
Book.belongsTo(Course);

Course.hasOne(Video);
Video.belongsTo(Course);

User.hasMany(Track_Progress);
Course.hasMany(Track_Progress);
Track_Progress.belongsTo(User);
Track_Progress.belongsTo(Course);

User.hasMany(User_History);
User_History.belongsTo(User);

User_History.belongsTo(Course);
User_History.hasOne(User_Video_Progress);
User_History.hasOne(User_Book_Progress);

User_Book_Progress.belongsTo(User_History);
User_Video_Progress.belongsTo(User_History);


module.exports = {
  db,
  models: {
    User,
    Course,
    Course_Category,
    Course_Sub_Category,
    Video,
    Book,
    Track_Progress,
    User_History,
    User_Book_Progress,
    User_Video_Progress
  },
};
