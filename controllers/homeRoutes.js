const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                model: User,
                attributes: ['name','id'],
                }
            ],
        });


        const posts = postData.map((post) => post.get({ plain:true }));

        // console.log(posts); 

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
            // user_id: req.session.user_id,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['body','user_id','created_at'],
                    include: [User],
                }
            ]
        });
        const post = postData.get({ plain:true });
        
        res.render('postview', {
            post,
            logged_in: req.session.logged_in,
            // user_id: req.session.user_id,
        });

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/dashboard/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model : Post,
                    attributes : ['id','title', 'body','created_at']
                }
            ]
        });
        // res.json(userData)
        const user = userData.get({ plain:true });

        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
        });


    } catch (err) {
        res.status(500).json(err)
    }
    // res.render('dashboard')
})


router.get('/login', (req, res) => {
    //if user logged in, redirect them to dashboard
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router