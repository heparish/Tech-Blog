const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET all comments
router.get('/', async (req,res) => {
	try {
		const commentData = await Comment.findAll( { include: [ {model: User}, {model: Post} ] } );

		res.status(200).json(commentData);
		
	} catch (err) {
		res.status(500).json(err);
	}
});

// route to create/add post
router.post('/', async (req, res) => {
	try {
	const commentData = await Comment.create({
		content: req.body.content,
		user_id: req.session.user_id,
		post_id: req.body.bpIdent,

	});

	res.status(200).json(commentData);

	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const commentData = await Comment.update(
			{
				content: req.body.content,
				user_id: req.body.user_id,
				post_id: req.body.post_id,
			},
			{
			where: {
				id: req.params.id,
			},
		}
	);

	res.status(200).json(commentData);

	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;