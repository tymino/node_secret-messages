import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import connectDB from './db';
import messageRoute from './routes/messageRoute';
import homeRoute from './routes/homeRoute';

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/message', messageRoute);
app.use('/', homeRoute);

app.use((req, res, next) => res.status(404).render('pages/404'));

connectDB(app);