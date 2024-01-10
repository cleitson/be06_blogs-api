const { Router } = require('express');
const { findAll } = require('../controllers/blogpost.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const postRoute = new Router();

postRoute.get('/', authMiddleware, findAll);

postRoute.post('/', authMiddleware);

module.exports = postRoute;