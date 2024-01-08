const express = require('express');
require('express-async-errors');
const { Category } = require('./models');
const { Login } = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', Login);

app.get('/categories', async (req, res) => {
  const data = await Category.findAll();
  res.status(200).json(data);
});
app.post('/categories', async (req, res) => {
  const { name } = req.body;
  const created = await Category.create({ name });
  res.status(201).json(created);
});

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
