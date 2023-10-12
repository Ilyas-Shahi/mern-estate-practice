import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

app.use('/api/user', userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
