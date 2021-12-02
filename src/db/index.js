import mongoose from 'mongoose';

const connectDB = async (app) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    await app.listen(process.env.PORT);

    console.log('Server open!');
  } catch (error) {
    throw error;
  }
};

export default connectDB;
