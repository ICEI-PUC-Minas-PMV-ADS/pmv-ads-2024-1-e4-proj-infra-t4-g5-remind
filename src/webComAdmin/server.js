
//server.js
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
/* import Admin from './src/models/Admin.js'; */

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'build')));


// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/admins', adminRoutes);

// Função para registrar um novo administrador
/* const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verifique se o administrador já está registrado
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Este email já está sendo usado por outro administrador.' });
    }

    // Criptografe a senha antes de armazená-la no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crie um novo objeto Admin com os dados fornecidos
    const admin = new Admin({
      name,
      email,
      password: hashedPassword // Armazene a senha criptografada
    });

    // Salve o novo administrador no banco de dados
    await admin.save();

    res.status(201).json({ message: 'Administrador registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro ao registrar o administrador.', error: error.message });
  }
}; */

// Rotas
/* app.post('/api/admin/register', registerAdmin);
app.get('/', (req, res) => {
  res.send('API is running...');
}); */

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


