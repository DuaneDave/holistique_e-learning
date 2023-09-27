import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import allowedOrigins from './config/origin.js';
import apiRouter from './routes/api.routes.js';
import db from './config/db.js';

const app = express();
const PORT = 4000;
await db()

app.use(cors(allowedOrigins()));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
