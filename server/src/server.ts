import express from 'express';

const app = express();

// routes
app.get('/users', (req, res) => {
  console.log('ok');

  // JSON

  res.send('hello world')
});

app.listen(3333);