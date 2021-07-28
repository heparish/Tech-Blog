  
const { Post } = require('../models');

const postData = [
  {
    id:1,
    post_title: 'Tech Blog',
    body:"what a mess!",
    user_id:5
  },
  {
    id:2,
    post_title: 'Tech Blog',
    body:"Is this working?!",
    user_id:1
  },
  {
    id:3,
    post_title: 'Tech Blog',
    body:"Do we get an ID?!",
    user_id:2
  },
  {
    id:4,
    post_title: 'Tech Blog',
    body:"what a mess!",
    user_id:4
  },
  {
    id:5,
    post_title: 'Tech Blog',
    body:"Why is this happening to me??!",
    user_id:3
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;