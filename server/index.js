import express from 'express';
import 'dotenv/config';

import db from './config/db.js';

db();

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
