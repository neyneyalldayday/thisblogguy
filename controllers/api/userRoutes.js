const router = require('express').Router();
const {User} = require('../../models');
console.log("userRoutes")

router.post("/", async(req, res) => {
    try{
        const createUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.userId = createUser.id;
            req.session.username = createUser.username;
            req.session.loggedIn = true;
            res.json(createUser)
        })

        console.log(createUser)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({
            where: {
                username: req.body.username,
            }
        })
        if(!user){
            res.status(400).json({message: "no user with this username"})
            return
        }
        const validatePassword = user.checkPassword(req.body.password)
        if(!validatePassword){
            res.status(400).json({message: "no user with this password"})
            return
        }
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
            res.json({user, message: "you are logged in"})
        })


    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    }else{
        res.status(404).end()
    }
})

module.exports = router