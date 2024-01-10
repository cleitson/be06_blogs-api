const { Router } = require('express');
const { insertUser, findAllUser } = require('../controllers/user.controller');
const { validDisplayName, validEmail, validPassword } = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const userRoute = new Router();

userRoute.get('/', authMiddleware, findAllUser);
userRoute.post('/', validDisplayName, validEmail, validPassword, insertUser);

module.exports = userRoute;