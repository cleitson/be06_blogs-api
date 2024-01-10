const { Router } = require('express');
const { insertCategory, findAllCategories } = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const categoryRoute = new Router();

categoryRoute.get('/', authMiddleware, findAllCategories);

categoryRoute.post('/', authMiddleware, insertCategory);

module.exports = categoryRoute;