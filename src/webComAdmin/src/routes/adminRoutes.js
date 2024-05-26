
// routes/adminRoutes.jsx
import express from 'express';
import bcrypt from 'bcrypt';
import Admin from '../models/Admin.js';

const router = express.Router();

// Registro de um novo administrador
router.post('/register', async (req, res) => {
  const { adminName, email, password, role } = req.body;

  try {
    // Verificar se o administrador já está registrado
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Este email já está sendo usado por outro administrador.' });
    }

    // Criptografe a senha antes de armazená-la no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crie um novo objeto Admin com os dados fornecidos
    const admin = new Admin({
      adminName,
      email,
      password: hashedPassword,
      role
    });

    // Salve o novo administrador no banco de dados
    await admin.save();

    res.status(201).json({ message: 'Administrador registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro ao registrar o administrador.', error: error.message });
  }
});

// Obter todos os administradores
/* router.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administradores.' });
  }
}); */

// Obter administrador por ID
/* router.get('admins/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administrador.' });
  }
}); */

// Atualizar administrador por ID
/* router.put('admins/:id', async (req, res) => {
  const { id } = req.params;
  const { adminName, email, password, role } = req.body;
  try {
    await Admin.findByIdAndUpdate(id, { adminName, email, password, role });
    res.json({ message: 'Administrador atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar administrador.' });
  }
}); */

// Excluir administrador por ID
/* router.delete('admins/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Admin.findByIdAndDelete(id);
    res.json({ message: 'Administrador excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir administrador.' });
  }
}); */

export default router;
