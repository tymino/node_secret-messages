import path from 'path';
import express from 'express';
import Messages from '../db/Scheme';

import { hash, verify, encrypt, decrypt } from '../utils/myCrypto';
import urlGenerator from '../utils/urlGenerator';

const homeRoute = express.Router();

homeRoute.get('/', (req, res) => {
  res.render('pages/home');
});

homeRoute.post('/', async (req, res) => {
  const { message, password } = req.body;

  const hashMessage = encrypt(message);
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
});

homeRoute.post('/:id', async (req, res) => {
  if (req.params.id.length === 6) {
    const data = await Messages.findOne({ url: req.params.id });
    const checkPassword = await verify(req.body.password, data.password);

    if (checkPassword) {
      const message = decrypt(data.message);
      res.send({ message });
      return;
    }

    res.send({ message: null });
    return;
  }

  res.render('pages/404');
});

export default homeRoute;
