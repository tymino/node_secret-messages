import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

const router = express.Router();

router.get('/link', (req, res) => {
  res.render('pages/link', { linkText: 'https://localhost:5000/We4Q2u' });
});

router.get('/', async (req, res) => {
  await Messages.findOne({ name: 'Alex' });
  
  res.render('pages/home');
});

router.post('/', async (req, res) => {
  console.log(req.body.name, '/');

  res.status(200).redirect('/link');
});

// router.get('/:id', async (req, res) => {
//   const id = req.params.id;

//   if (id.length > 6) {
//     res.sendFile(path.join(__dirname, '../', '/pages/404.html'));
//     return;
//   }

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
// });

export default router;
