import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

const router = express.Router();

router.get('/link', (req, res) => {
  const passedVariable = req.query.url;

  console.log(req.query);

  res.render('pages/link', { linkText: req.query.url });
  // res.render('pages/link', { linkText: 'https://localhost:5000/We4Q2u44444' });
});

router.get('/', async (req, res) => {
  // await Messages.findOne({ name: 'Alex' });
  res.render('pages/home');
});

router.post('/', async (req, res) => {
  res.send(req.body);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  if (id.length > 6) {
    res.render('pages/404');
    return;
  }

//   const name = '17';

//   res.sendFile(path.join(__dirname, '../', '/pages/letter.html'));
//   return;

//   const msg = new Messages({ name });

//   try {
//     const message = await Messages.findOne({ name });

//     console.log(message, '/:id');

//     if (message) {
//       res.send('Nope');
//       return;
//     }

//     await msg.save();
//     res.send('Added');
//   } catch (error) {
//     console.log(error, 'catch');
//   }
});

export default router;
