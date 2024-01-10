const httpMap = require('../utils/mapHttpStatus');
const { createCategory } = require('../services/category.service');

const insertCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await createCategory(name);

  res.status(httpMap(status)).json(data);
};

module.exports = { insertCategory };