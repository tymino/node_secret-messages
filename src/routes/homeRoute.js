import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
  // await Messages.findOne({ name: 'Alex' });
  res.render('pages/home');
});

homeRoute.post('/', async (req, res) => {
  res.send(req.body);
});

homeRoute.get('/:id', (req, res) => {
  if (req.params.id.length === 6) {
    res.render('pages/message');
    return;
  }

  res.render('pages/404');

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

export default homeRoute;
