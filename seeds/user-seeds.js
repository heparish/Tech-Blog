const { User } = require('../models');

const userData = [
  {
    id:1,
    username: 'Sylvia',
    password: "Plath123",
    
  },
  { 
    id:2,
    username: 'Jack',
    password: "Rose123",
  },
  { 
    id:3,
    username: 'Antonio',
    password: "Maria123",
  },
  { 
    id:4,
    username: 'Anabelle',
    password: "Home123",
  },
  { 
    id:5,
    username: 'Justine',
    password: "Just123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;