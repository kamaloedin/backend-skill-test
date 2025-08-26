import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.get('/', (req, res) => {
  res.json({
    message: 'This is home',
  });
});

app.listen(port, () => {
  console.log(`App is listening to http://localhost:${port}/`);
});
