const {Comment} = require("../models")
const commentData = [
    [
        { body: "Great introduction to JavaScript! Looking forward to learning more." },
        { body: "JavaScript is so powerful for adding interactivity to websites." },
      ],
      [
        { body: "I love the way you explain HTML and CSS concepts. Clear and concise!" },
        { body: "Mastering HTML and CSS is crucial for any web developer." },
      ],
      [
        { body: "I've been using React for a while. It's my favorite framework!" },
        { body: "Angular is great for building complex applications with a lot of data." },
      ],
      [
        { body: "Thanks for the tips on improving front-end performance. Very helpful!" },
        { body: "Optimizing images and minimizing HTTP requests made a big difference." },
      ],
      [
        { body: "Node.js is a game-changer for server-side development. Exciting stuff!" },
        { body: "Async programming was a bit tricky at first, but it's so powerful." },
      ],
];


const seedComments = () => Comment.bulkCreate(commentData)
module.exports = seedComments