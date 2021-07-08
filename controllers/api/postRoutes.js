const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blog posts
router.get('/', async (req,res) => {
	try {
    	const postData = await Post.findAll( { include: [ {model: User}, {model: Comment} ] } );
  
    	res.status(200).json(postData);
    
    } catch (err) {
    	res.status(500).json(err);
    }
});

// GET individual post
router.get('/:id', withAuth, async (req, res) => {
	try {
	const postData = await Post.findByPk(req.params.id, {
		include: [{ model: User }, { model: Comment }]

	});

	if (!postData) {
		res.status(404).json({ message: 'No post found with this id!' });
		return;
	}

	res.status(200).json(postData);

	} catch (err) {
		res.status(500).json(err);
	}
});

// route to create a post
router.post('/', async (req, res) => {
	console.log('you are in teh blog posting route')
	try {
	const postData = await Post.create({
		post_title: req.body.post_title,
		body: req.body.body,
		user_id: req.session.user_id, 
	});
	
	res.status(200).json(postData);

	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const postData = await Post.update(
			{
				post_title: req.body.post_title,
				body: req.body.body,
				user_id: req.session.user_id,
			},
			{
			where: {
				id: req.params.id,
			},
		}
	);
	
	res.status(200).json(postData);
		
	} catch (err) {
    	res.status(500).json(err);
	}
});

module.exports = router;