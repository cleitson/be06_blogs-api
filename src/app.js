const express = require('express');
require('express-async-errors');
const { Login, User, Category } = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', Login);
app.use('/user', User);
app.use('/categories', Category);

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
