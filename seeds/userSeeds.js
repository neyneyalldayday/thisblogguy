const {User} = require("../models")
const userData = [
  {
    username: "ducky21",
    password: "12345678",
  },
  {
    username: "alice",
    password: "pa$$w0rd",
  },
  { 
    username: "bob", 
    password: "secret123" 
},
  {
    username: "charlie", 
  password: "mySecurePass"
 },
  { 
    username: "daisy", 
  password: "flowerPower" 
},
];


const seedUsers = () => User.bulkCreate(userData)
module.exports = seedUsers