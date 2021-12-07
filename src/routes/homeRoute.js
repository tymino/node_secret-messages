import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

import { hash, verify } from '../utils/hash';
import urlGenerator from '../utils/urlGenerator';

const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
  // await Messages.findOne({ name: 'Alex' });
  res.render('pages/home');
});

homeRoute.post('/', async (req, res) => {
  const { message, password } = req.body;

  const hashMessage = await hash(message);
  const hashPassword = await hash(password);
  const newURL = urlGenerator();

  const newMessage = new Messages({
    url: newURL,
    message: hashMessage,
    password: hashPassword,
    date: new Date(),
  });

  try {
    await newMessage.save();
    res.send({ url: newURL });
  } catch (error) {
    console.log(error);
  }
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
