import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import connectDB from './src/db-connection.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'build')));


//Rotas
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'build', 'index.html'));
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
