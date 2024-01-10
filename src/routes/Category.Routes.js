const { Router } = require('express');
const { insertCategory } = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const categoryRoute = new Router();

categoryRoute.post('/', authMiddleware, insertCategory);

module.exports = categoryRoute;