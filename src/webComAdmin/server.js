import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import connectDB from './src/db-connection.js';
import dotenv from 'dotenv';

import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

const staticPath = path.join(__dirname, 'src', 'webComAdmin', 'dist');
app.use(express.static(staticPath));

// Verificar se a aplicação está inicializando corretamente
console.log('Inicializando servidor');

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/admins', adminRoutes);

// Verificar rotas de admin
console.log('Rotas de admin carregadas');

app.get('/*', (req, res) => {
  console.log(`Request para: ${req.url}`);
  res.sendFile(path.join(staticPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


