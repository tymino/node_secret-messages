import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageScheme = new Schema(
  {
    name: String,
  },
  { versionKey: false, unique: true },
);

const Messages = mongoose.model('Messages', messageScheme);

export default Messages;
