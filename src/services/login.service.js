const { User } = require('../models');
const { newToken } = require('../utils/token');

const login = async (email, password) => {
  if (!email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  const findUser = await User.findOne({ where: { email } });

  if (!findUser || findUser.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = newToken(findUser.id);

  return { status: 'SUCCESS', data: { token } };
};

module.exports = { login };