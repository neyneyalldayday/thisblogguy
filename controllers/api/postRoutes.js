const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
  
    try {
      const newPost = await Post.create({ ...body, userId: req.session.userId });
      res.json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [affectedRows] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
     
      const post = await Post.findByPk(req.params.id);
  
      if (!post) {
       
        return res.status(404).end();
      }
  
      
      const updatedPost = await post.update(req.body);
  
      if (updatedPost) {
       
        return res.status(200).json(updatedPost);
      } else {
        
        return res.status(500).json({ error: "Failed to update post." });
      }
    } catch (err) {
     
      console.error(err);
      return res.status(500).json({ error: "An error occurred while updating the post." });
    }
  });
  

  module.exports = router