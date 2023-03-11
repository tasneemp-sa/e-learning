const coursesArr = [
    {
        course_name: "You Don't Know JS, ES6 and BEyond",
        overview: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.Like other books in this series, You Don’t Know JS: ES6 & Beyond dives into trickier parts of the language that many JavaScript programmers either avoid or know nothing about. Armed with this knowledge, you can achieve true JavaScript mastery",
        author: "Kyle Simpson",
        meant_for: "Basic Knowledge of Javascript",
        time_to_complete: "5 hrs 15 mins",
        type: "book",
        thumbnail: "./Thumbnails/you_dont_know_js.jpeg"
    },
    {
        course_name: "Mastering Modular Javascript.js",
        overview: "This practical guide will help you tackle modular programming to produce code that’s readable, maintainable, and scalable. You’ll learn the fundamentals of modular architecture with JavaScript and the benefits of writing self-contained code at every system level, including the client and server. Nicolás Bevacqua, author of Practical Modern JavaScript, demonstrates how to scale out JavaScript applications by breaking codebases into smaller modules. By following the design practices in this book, senior developers, technical leaders, and software architects will learn how to create modules that are simple and flexible while keeping internal complexity in check.",
        author: "Nicolar Bevacqua",
        meant_for: "Basic Knowledge of Javascript",
        time_to_complete: "4 hrs 21 mins",
        type: "book",
        thumbnail: "./Thumbnails/mastering_modular_javascript.jpeg"
    },
    {
        course_name: "Javascript Programming Full Course",
        overview: "Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: https://scrimba.com/learn/learnjavasc... Code Two versions: Interactive version: https://scrimba.com/learn/learnjavasc... GitHub repo: https://github.com/scrimba/learn-java... Created by Per Harald Borgen. Per on Twitter: https://twitter.com/perborgen",
        author: "Per Harald Borgen",
        meant_for: "Beginner",
        time_to_complete: "7 hrs 44 mins",
        type: "video",
        thumbnail: "./Thumbnails/javascriptfull.png"
    }
]

module.exports = {
    courses: coursesArr,
  };