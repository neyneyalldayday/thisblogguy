// const seedUsers = require("./userSeeds")
const seedPosts = require("./postSeeds")
// const seedComments = require("./commentSeeds")

const sequelize = require("../Config/Connection")
const seedAll = async() => {
    await sequelize.sync({force: true})
    console.log("databaseSync")
   // await seedUsers()
    console.log("usersSeeded")
    await seedPosts()
    console.log("postsSeeded")
    // await seedComments()
    console.log("commentsSeeded")
    process.exit(0)

};
seedAll()
