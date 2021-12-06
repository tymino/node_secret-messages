import express from 'express';

const messageRoute = express.Router();

messageRoute.get('/', (req, res) => {
  const passedVariable = req.query.url;

  console.log(req.query);

  res.render('pages/link', { linkText: req.query.url });
  // res.render('pages/link', { linkText: 'https://localhost:5000/We4Q2u44444' });
});

export default messageRoute;