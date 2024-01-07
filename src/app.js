const express = require('express');
const { Categories } = require('./models');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.get('/live', (req, res) => { res.status(200).json({ message: 'ok' }); });

app.get('/categories', async (req, res) => {
  const data = await Categories.findAll();
  res.status(200).json(data);
});
app.post('/categories', async (req, res) => {
  const { name } = req.body;
  const created = await Categories.create({ name });
  res.status(201).json(created);
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
