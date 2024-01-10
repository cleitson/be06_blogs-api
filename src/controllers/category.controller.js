const httpMap = require('../utils/mapHttpStatus');
const { createCategory, getAllCategories } = require('../services/category.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await createCategory(name);

  res.status(httpMap(status)).json(data);
};

const findAllCategories = async (req, res) => {
  const { status, data } = await getAllCategories();
  res.status(httpMap(status)).json(data);
};

module.exports = { insertCategory, findAllCategories };