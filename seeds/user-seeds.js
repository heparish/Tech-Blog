const { User } = require('../models');

const userData = [
  {
    id:1,
    name: 'Sylvia',
    email: 'plath@gmail.com',
    password: "Plath123",
    
  },
  { 
    id:2,
    name: 'Jack',
    email: 'rose@gmail.com',
    password: "Rose123",
  },
  { 
    id:3,
    name: 'Antonio',
    email: 'maria@gmail.com',
    password: "Maria123",
  },
  { 
    id:4,
    name: 'Anabelle',
    email: 'conjuring@gmail.com',
    password: "Home123",
  },
  { 
    id:5,
    name: 'Justine',
    email: 'jj@gmail.com',
    password: "Just123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;