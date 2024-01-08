const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtPassWord = process.env.JWT_SECRET;

const login = async (email, password) => {
  if (!email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  const findUser = await User.findOne({ where: { email } });

  if (!findUser || findUser.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = jwt.sign({
    sub: findUser.id,
  }, jwtPassWord, { expiresIn: '7d' });

  return { status: 'SUCCESS', data: { token } };
};

module.exports = { login };