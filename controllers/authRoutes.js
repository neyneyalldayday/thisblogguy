const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
    try{
        const generalPosts = await Post.findAll({
            where: {
                userId: req.session.userId
            }
        })
        const posts = generalPosts.map((post) => post.get({plain: true}))
        res.render("generalPostsAdmin", {
            layout: "dashboard",
            posts})

    }catch(err) {
        console.log(err)
        res.redirect("login")
    }
})

router.get("/new", withAuth, (req, res) => {
    res.render("makeAPost", {
        layout: "dashboard",
    })
})

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const editPost = await Post.findByPk(req.params.id)
        if(editPost) {
            const post = editPost.get({plain: true})
            res.render("editPost", {
                layout: "dashboard",
                post})
        }else{
            res.status(404).end()
        }
        

        
    } catch (error) {
        console.log(error)
        res.redirect("login")
    }
})

module.exports = router