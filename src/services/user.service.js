const { User } = require('../models');
const { newToken } = require('../utils/token');

const createUser = async (displayName, email, password, image) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser) {
    return { status: 'CONFLICT',
      data: {
        message: 'User already registered',
      } };
  }
  const { id } = await User.create({ displayName, email, password, image });
  const token = newToken(id);
  return { status: 'CREATED', data: { token } };
};

module.exports = { createUser };