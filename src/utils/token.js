const jwt = require('jsonwebtoken');

const jwtPassWord = process.env.JWT_SECRET;

const newToken = (dados) => {
  const token = jwt.sign({
    sub: dados,
  }, jwtPassWord, { expiresIn: '7d' });
  return token;
};

const verifyToken = (dados) => {
  const token = jwt.verify(dados, jwtPassWord);
  return token;
};

module.exports = { newToken, verifyToken };