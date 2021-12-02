import dotenv from 'dotenv';
import express from 'express';

import connectDB from './db';
import Messages from './db/Scheme';

const app = express();
dotenv.config();

connectDB(app);

app.get('/', (req, res) => {
  Messages.findOne({ name: 'Alex' }, (err, message) => {
    if (err) throw err;

    // console.log(message);
    res.send(message);
  });
});
app.get('/:id', async (req, res) => {
  const id = req.params.id;
  const name = '17';

  const msg = new Messages({ name });

  try {
    const message = await Messages.findOne({ name });

    console.log(message);

    if (message) {
      res.send('Nope');
      return;
    }

    await msg.save();
    res.send('Added');

  } catch (error) {
    console.log(error, 'catch');
  }
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
