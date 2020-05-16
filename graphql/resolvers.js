const bcrypt = require('bcryptjs');
const User = require('../models/user');

const allUsers = async () => await User.findAll();

const getUser = async ({ userId }) => await User.findByPk(userId);

const createUser = async ({ userInput }, req) => {
  const hashedPwd = await bcrypt.hash(userInput.password, 12);
  const userCreateData = {
    email: userInput.email,
    name: userInput.name,
    password: hashedPwd,
    city: userInput.city,
    phone: userInput.phone
  }
  const [createdUser, created] = await User.findOrCreate({
    where: { email: userInput.email },
    defaults: userCreateData
  });
  return createdUser;
};

const updateUser = async ({ userId, userInput }, req) => {
  console.log({ userId, userInput });
  const user = await getUser({ userId });
  user.name = userInput.name || user.name;
  user.email = userInput.email || user.email;
  user.city = userInput.city || user.city;
  user.phone = userInput.phone || user.phone;
  if (userInput.password) {
    // We can just update with new pwd but i wanted to try bcrypt.compare
    const isSamePwd = await bcrypt.compare(userInput.password, user.password);
    if (!isSamePwd) {
      const newHashedPwd = await bcrypt.hash(userInput.password, 12);
      user.password = newHashedPwd;
    }
  }
  await user.save();
  return user;
};

const deleteUser = async ({ userId }) => {
  const user = await getUser({ userId });
  if (!user) {
    throw new Error(`Cannot delete user. Could not find user with id ${userId}`);
  }
  await User.destroy({ where: { id: userId }})
  return user
};

module.exports = {
  allUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
