import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    {name: 'Exemplo'}
  ]
  return res.json(users);
});

app.listen(3333);