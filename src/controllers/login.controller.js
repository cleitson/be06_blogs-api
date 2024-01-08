const httpMap = require('../utils/mapHttpStatus');
const loginService = require('../services/login.service');

const searchLogin = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await loginService.login(email, password);

  res.status(httpMap(status)).json(data);
};

module.exports = {
  searchLogin,
};