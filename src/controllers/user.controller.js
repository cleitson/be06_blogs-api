const httpMap = require('../utils/mapHttpStatus');
const userService = require('../services/user.service');

const insertUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.createUser(displayName, email, password, image);
  res.status(httpMap(status)).json(data);
};

const findAllUser = async (req, res) => {
  const { status, data } = await userService.getAllUser();
  res.status(httpMap(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getUserById(id);
  res.status(httpMap(status)).json(data);
};

module.exports = { insertUser, findAllUser, findById };