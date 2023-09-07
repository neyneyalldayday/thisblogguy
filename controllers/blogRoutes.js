const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get("/", async (req, res) => {
    try{
        const generalPosts = await Post.findAll({
            include: [User]
        })
        const posts = generalPosts.map((post) => post.get({plain: true}))
        res.render("generalPosts", {posts})

    }catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get("/post/:id", async (req, res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment, 
                    include: [User],
                }
            ]
        })
        if(singlePost) {
            const post = singlePost.get({plain: true})
            res.render("onePost", {post})
        }else{
            res.status(404).end()
        }
        
    } catch (error) {
       console.log(error) 
       res.status(500).json(error)
    }
  })

module.exports = router