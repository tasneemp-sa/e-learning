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
    },

    {
        course_name: "Data Visualization With Python and Javascript",
        overview: "Learn how to turn raw data into rich, interactive web visualizations with the powerful combination of Python and JavaScript. With this hands-on guide, author Kyran Dale teaches you how build a basic dataviz toolchain with best-of-breed Python and JavaScript libraries—including Scrapy, Matplotlib, Pandas, Flask, and D3—for crafting engaging, browser-based visualizations. As a working example, throughout the book Dale walks you through transforming Wikipedia’s table-based list of Nobel Prize winners into an interactive visualization. You’ll examine steps along the entire toolchain, from scraping, cleaning, exploring, and delivering data to building the visualization with JavaScript’s D3 library. If you’re ready to create your own web-based data visualizations—and know either Python or JavaScript— this is the book for you.",
        author: "Kyran Dale",
        meant_for: "Intermediate level with python and javascript",
        time_to_complete: "7 hrs 44 mins",
        type: "book",
        thumbnail: "./Thumbnails/data_visualization_python.jpeg"
    },
    {
        course_name: "Game Development Using Python",
        overview: "This book will guide you through the basic game development process using Python, covering game topics including graphics, sound, artificial intelligence, animation, game engines, etc. Real games are created as you work through the text and significant parts of a game engine are built and made available for download. New chapters on card games and a side-scroller. The companion files contain all of the resources described in the book, e.g., example code, game assets, video/sound editing software, and color figures. Instructor resources are available for use as a textbook.",
        author: "James R Parker",
        meant_for: "Intermediate level python ",
        time_to_complete: "4 hrs 15 mins",
        type: "book",
        thumbnail: "./Thumbnails/gameDevelopmentUsingPython.jpeg"
    },
    {
        course_name: "React-Redux Beginner To Advanced",
        overview: "Learn how to use Redux in this full course for beginners. You will learn how to use Redux with ReduxToolkit Library to create an application involving HTTP requests.",
        author: "Nikhil Thandani",
        meant_for: "Basic knowledge of javascript and react",
        time_to_complete: "1 hr 41 mins",
        type: "video",
        thumbnail: "./Thumbnails/react_redux.jpeg"
    }
]

module.exports = {
    courses: coursesArr,
  };