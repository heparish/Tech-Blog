const express = require('express');
const router = express.Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        include: [
            User,
        ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      console.log(posts)
  
      res.render('dashboard', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, { include: { all: true, nested: true }});
  
      const post = postData.get({ plain: true });
    
      res.render('post', { ...post, logged_in: req.session.logged_in });
  
    } catch (err) {
      res.status(500).json(err);
  	}
  });

  router.get('/posteditor/:id', withAuth, async (req, res) => {
    try {
    const postData = await Post.findByPk(req.params.id, { include: { all: true, nested: true }});
      const post = postData.get({ plain: true });
    
      res.render('posteditor', { ...post, logged_in: req.session.logged_in });
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/postcreation', withAuth, async (req, res) => {
    try { // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
        const user = userData.get({ plain: true });
  
      res.render('postcreation', {
        ...user,
        logged_in: true
      });
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.get('/comment', withAuth, async (req, res) => {
    if (req.session.logged_in) {
      return;
    }
  
  });
  
  // login route. If the user is already logged in, redirect the request to another route
  router.get('/login', (req, res) => {
    console.log("route hit")
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
  
    res.json();
  });
  
 module.exports = router;