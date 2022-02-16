import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/post.js';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.port || 5000;
const URI =
  'mongodb+srv://admin:TqhZdzUGfgGOb3t4@cluster0.a3407.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '3mb' }));
app.use(cors());
app.use('/posts', posts);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to DB');
    app.listen(PORT, () => {
      console.log('Server is running on port' + PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
