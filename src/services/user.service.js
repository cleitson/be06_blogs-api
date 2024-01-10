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

const getAllUser = async () => {
  const findAllUser = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return { status: 'SUCCESS', data: findAllUser };
};

const getUserById = async (id) => {
  const findUser = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
  if (!findUser) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESS', data: findUser };
};

module.exports = { createUser, getAllUser, getUserById };