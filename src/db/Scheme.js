import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageScheme = new Schema(
  {
    url: String,
    message: String,
    password: String,
    date: Date,
  },
  { versionKey: false, unique: true },
);

const Messages = mongoose.model('Messages', messageScheme);

export default Messages;
