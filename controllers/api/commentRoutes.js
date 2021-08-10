const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');

const { User, Post, Comment } = require('../../models');

// GET all comments test
// router.get('/', withAuth, async (req,res) => {
// 	try {
// 		const commentData = await Comment.findAll( { include: [User, Post ] } );
//  		console.log(comment, "from the GET");
// 		 const comment = commentData.map((comments)=> comments.get({ plain: true}))
// 		res.status(200).json(comment);
		
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// route to add comment
router.post('/', withAuth, async (req, res) => {
	console.log(req.body);
    try {
      const newComment = await Comment.create({
         body: req.body.content,
        user_id: req.session.user_id,
		post_id: req.body.pIdent,
      });
  
      res.status(200).json(newComment);
	  console.log(newComment);
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