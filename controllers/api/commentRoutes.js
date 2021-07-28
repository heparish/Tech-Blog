const express = require('express');
const router = express.Router();

const { User, Post, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// GET all comments test
router.get('/', async (req,res) => {
	try {
		const commentData = await Comment.findAll( { include: [ {model: User}, {model: Blog} ] } );

		res.status(200).json(commentData);
		
	} catch (err) {
		res.status(500).json(err);
	}
});

// route to add comment
router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        content: req.body.content,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// update comment
router.put('/:id', async (req, res) => {
	try {
		const commentData = await Comment.update(
			{
				body: req.body.body,
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