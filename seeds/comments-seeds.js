const { Comment } = require('../models');

const commentData = [
  {
    id:1,
    body: 'Nice point of view',
    user_id:5,
    post_id:4
  },
  {
    id:2,
    body: 'I really like your post',
    user_id:1,
    post_id:3
  },
  {
    id:3,
    body: 'Fascinating',
    user_id:3, 
    post_id:2
},
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;