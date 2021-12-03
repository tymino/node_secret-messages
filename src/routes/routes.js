import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

const router = express.Router();

router.get('/', async (req, res) => {
  await Messages.findOne({ name: 'Alex' });

  // res.sendFile(path.join(__dirname, '../', '/pages/home.html'));
  res.render('pages/home', { header: 'NEW Header' });
});

router.post('/', async(req, res) => {

  console.log(req.body.name);

  // res.status(200).json(req.body.name);
  res.redirect('link');
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

router.get('/link', (req, res) => {
  res.render('pages/link', { header: 'NEW Header' });
});



export default router;
