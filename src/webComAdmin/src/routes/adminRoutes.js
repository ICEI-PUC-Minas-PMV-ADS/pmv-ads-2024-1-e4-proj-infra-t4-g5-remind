// routes/adminRoutes.jsx
import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

// Registro de um novo administrador
router.post('/admin/register', async (req, res) => {
  const { adminName, email, password, role } = req.body;

  try {
    const admin = new Admin({ adminName, email, password, role });
    await admin.save();
    res.status(201).json({ message: 'Administrador registrado com sucesso.' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao registrar administrador.' });
  }
});

// Obter todos os administradores
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administradores.' });
  }
});

// Obter administrador por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar administrador.' });
  }
});

// Atualizar administrador por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { adminName, email, password, role } = req.body;
  try {
    await Admin.findByIdAndUpdate(id, { adminName, email, password, role });
    res.json({ message: 'Administrador atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar administrador.' });
  }
});

// Excluir administrador por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Admin.findByIdAndDelete(id);
    res.json({ message: 'Administrador excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir administrador.' });
  }
});

export default router;
