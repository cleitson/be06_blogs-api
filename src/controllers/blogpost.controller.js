const httpMap = require('../utils/mapHttpStatus');
const blogPostService = require('../services/blogPost.service');

const findAll = async (req, res) => {
  const { status, data } = await blogPostService.getAllposts();
  res.status(httpMap(status)).json(data);
};

module.exports = { findAll };