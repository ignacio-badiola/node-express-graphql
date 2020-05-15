const bcrypt = require('bcryptjs');
const User = require('../models/user');

const createUser = async function({ userInput }, req) {
  const hashedPw = await bcrypt.hash(userInput.password, 12);
  const userCreateData = {
    email: userInput.email,
    name: userInput.name,
    password: hashedPw,
    city: userInput.city,
    phone: userInput.phone
  }
  const [createdUser, created] = await User.findOrCreate({
    where: { email: userInput.email },
    defaults: userCreateData
  });
  return createdUser;
};

const allUsers = async () => await User.findAll();

module.exports = {
  createUser,
  allUsers
};
