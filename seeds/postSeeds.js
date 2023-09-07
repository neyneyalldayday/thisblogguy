const {Post} = require("../models")
const postData = [
    {
        title: "Introduction to JavaScript",
        body: "JavaScript is a versatile programming language used for building dynamic and interactive web applications...",
      },
      {
        title: "Mastering HTML and CSS",
        body: "HTML and CSS are the building blocks of web development. Learn how to create well-structured web pages...",
      },
      {
        title: "JavaScript Frameworks: A Comparison",
        body: "Explore popular JavaScript frameworks like React, Angular, and Vue. Understand their strengths and use cases...",
      },
      {
        title: "Best Practices for Front-End Performance",
        body: "Improve the performance of your web applications by optimizing assets, reducing load times, and more...",
      },
      {
        title: "Exploring Node.js and Backend Development",
        body: "Dive into Node.js, a powerful runtime for building server-side applications. Learn about asynchronous programming...",
      },
];


const seedPosts = () => Post.bulkCreate(postData)
module.exports = seedPosts