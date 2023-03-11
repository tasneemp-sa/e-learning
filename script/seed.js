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
    User_Video_Progress
  },
} = require("../server/db");

const { faker } = require("@faker-js/faker");

const { courses } = require("./courses");
const { categories } = require("./categories");
const { sub_categories } = require("./sub_categories");
const { books } = require("./books");

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
  
  const programming = await Course_Category.findOne({where: {course_cat_name: "Programming Languages"}});
  let javascript = await Course_Sub_Category.findOne({ where: {course_sub_cat_name: 'Javascript'}});
  const python = await Course_Sub_Category.findOne({ where: {course_sub_cat_name: 'Python'}});

  const modular_javascript = await Course.findOne({where: {course_name: "Mastering Modular Javascript.js"}});
  const dont_know_js = await Course.findOne({where: {course_name: "You Don't Know JS, ES6 and BEyond"}});
  const full_javascript = await Course.findOne({where: {course_name: "Javascript Programming Full Course"}});

  
  javascript.setCourse_category(programming);
  python.setCourse_category(programming);

  modular_javascript.setCourse_sub_category(javascript);
  dont_know_js.setCourse_sub_category(javascript);
  full_javascript.setCourse_sub_category(javascript);

  const book_dont_know_js = await Book.findOne({where: {book_name: "You Don't Know Javascript, ES6 And Beyond"}});
  const book_modular_js = await Book.findOne({where: {book_name: "Mastering Modular Javascript"}});

  book_dont_know_js.setCourse(dont_know_js);
  book_modular_js.setCourse(modular_javascript);
  
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
