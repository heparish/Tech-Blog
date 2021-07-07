const { User } = require('../models');

const userData = [
  {
    id:1,
    username: 'Sylvia',
    email: 'plath@gmail.com',
    password: "Plath123",
    
  },
  { 
    id:2,
    username: 'Jack',
    email: 'rose@gmail.com',
    password: "Rose123",
  },
  { 
    id:3,
    username: 'Antonio',
    email: 'maria@gmail.com',
    password: "Maria123",
  },
  { 
    id:4,
    username: 'Anabelle',
    email: 'conjuring@gmail.com',
    password: "Home123",
  },
  { 
    id:5,
    username: 'Justine',
    email: 'jj@gmail.com',
    password: "Just123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;