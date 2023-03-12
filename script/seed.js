"use strict";

const {
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
    User_Video_Progress,
  },
} = require("../server/db");

const { faker } = require("@faker-js/faker");

const { courses } = require("./courses");
const { categories } = require("./categories");
const { sub_categories } = require("./sub_categories");
const { books } = require("./books");
const {videos} = require("./videos");
const { userHistory } = require("./userHistorySeed");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  const seededUsers = [...Array(100)].map((user) => ({
    password: faker.internet.password(8),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
  }));

  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");
  //*******START OF DEMO DATA */
  // Creating Users

  const realUsers1 = await Promise.all([
    User.create({
      password: "tasneemPass",
      first_name: "Tasneem",
      last_name: "Patrawala",
      email: "tasneemp_sa@yahoo.com",
    }),
  ]);

  const realUsers2 = await Promise.all([
    User.create({
      password: "alexPass",
      first_name: "Alex",
      last_name: "Raider",
      email: "alex.raider@gmail.com",
    }),
  ]);

  for (let i = 0; i < courses.length; i++) {
    await Course.create(courses[i]);
  }

  for (let i = 0; i < categories.length; i++) {
    await Course_Category.create(categories[i]);
  }

  for (let i = 0; i < sub_categories.length; i++) {
    await Course_Sub_Category.create(sub_categories[i]);
  }

  for (let i = 0; i < books.length; i++) {
    await Book.create(books[i]);
  }

  for (let i = 0; i < videos.length; i++) {
    await Video.create(videos[i]);
  }

  for (let i = 0; i < userHistory.length; i++) {
    await User_History.create(userHistory[i]);
  }

  const programming = await Course_Category.findOne({
    where: { course_cat_name: "Programming Languages" },
  });
  const libraries = await Course_Category.findOne({
    where: { course_cat_name: "Libraries" },
  });

  let javascript = await Course_Sub_Category.findOne({
    where: { course_sub_cat_name: "Javascript" },
  });
  const python = await Course_Sub_Category.findOne({
    where: { course_sub_cat_name: "Python" },
  });
  const react = await Course_Sub_Category.findOne({
    where: { course_sub_cat_name: "React" },
  });

  const modular_javascript = await Course.findOne({
    where: { course_name: "Mastering Modular Javascript.js" },
  });
  const dont_know_js = await Course.findOne({
    where: { course_name: "You Don't Know JS, ES6 and BEyond" },
  });
  const full_javascript = await Course.findOne({
    where: { course_name: "Javascript Programming Full Course" },
  });
  const data_visualization = await Course.findOne({
    where: { course_name: "Data Visualization With Python and Javascript" },
  });
  const game_development = await Course.findOne({
    where: { course_name: "Game Development Using Python" },
  });
  const raect_redux = await Course.findOne({
    where: { course_name: "React-Redux Beginner To Advanced" },
  });


  javascript.setCourse_category(programming);
  python.setCourse_category(programming);
  react.setCourse_category(libraries)

  modular_javascript.setCourse_sub_category(javascript);
  dont_know_js.setCourse_sub_category(javascript);
  full_javascript.setCourse_sub_category(javascript);

  data_visualization.setCourse_sub_category(python);
  game_development.setCourse_sub_category(python);

  raect_redux.setCourse_sub_category(react);

  const book_dont_know_js = await Book.findOne({
    where: { book_name: "You Don't Know Javascript, ES6 And Beyond" },
  });
  const book_modular_js = await Book.findOne({
    where: { book_name: "Mastering Modular Javascript" },
  });
  const book_data_visualization = await Book.findOne({
    where: { book_name: "Data Visualization With Python and Javascript" },
  });
  const book_game_development = await Book.findOne({
    where: { book_name: "Game Development with Python" },
  });

  book_dont_know_js.setCourse(dont_know_js);
  book_modular_js.setCourse(modular_javascript);
  book_data_visualization.setCourse(data_visualization);
  book_game_development.setCourse(game_development);

  const video_full_javascript = await Video.findOne({
    where: { video_name: "Javascript Programming Full Course" },
  });
  const video_react_redux = await Video.findOne({
    where: { video_name: "React-Redux Beginner To Advanced" },
  });

  video_full_javascript.setCourse(full_javascript);
  video_react_redux.setCourse(raect_redux);


  const userHistory1 = await User_History.findOne({
    where: { last_opened: "Mar 10, 2023" },
  });

  const userHistory2 = await User_History.findOne({
    where: { last_opened: "Mar 11, 2023" },
  });

  const user = await User.findByPk(1);

  userHistory1.setUser(user);
  userHistory1.setCourse(modular_javascript)

  userHistory2.setUser(user);
  userHistory2.setCourse(raect_redux)

  // const users = await User.bulkCreate(seededUsers);

  console.log(`seeded successfully`);
  return;
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
