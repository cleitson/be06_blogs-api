const { Router } = require('express');
const { insertUser } = require('../controllers/user.controller');
const { validDisplayName, validEmail, validPassword } = require('../middlewares/user.middleware');

const userRoute = new Router();

userRoute.post('/', validDisplayName, validEmail, validPassword, insertUser);

module.exports = userRoute;