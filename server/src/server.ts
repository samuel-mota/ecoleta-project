import express from 'express';

const app = express();

// routes
app.get('/users', (req, res) => {
  console.log('ok');

  // JSON
  res.json([
    'Samuel',
    'teste',
    'teste2'
  ]);

  //res.send('hello world')
});

app.listen(3333);