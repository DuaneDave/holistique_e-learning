import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import db from './config/db.js';
import allowedOrigins from './config/origin.js';
import apiRouter from './routes/api.routes.js';

db();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors(allowedOrigins()));
app.use(cookieParser());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
