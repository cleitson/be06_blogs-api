const { Router } = require('express');
const { searchLogin } = require('../controllers/login.controller');

const loginRoute = new Router();

loginRoute.post('/', searchLogin);

module.exports = loginRoute;