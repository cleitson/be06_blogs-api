const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  const created = await Category.create({ name });
  return { status: 'CREATED', data: created };
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return { status: 'SUCCESS', data: allCategories };
};

module.exports = { createCategory, getAllCategories };