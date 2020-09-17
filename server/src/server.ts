import express from 'express';

const app = express();

// routes
app.get('/users', (req, res) => {
  console.log('ok');
});

app.listen(3333);