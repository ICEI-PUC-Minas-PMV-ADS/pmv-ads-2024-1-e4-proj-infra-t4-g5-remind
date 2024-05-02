'use strict';
const express = require('express');
const notesController = require('../controllers/notesController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/criar',protect, notesController.createNotes);
router.put('/update/:id',protect, notesController.update);
router.get('/get/:id', protect, notesController.getById);
router.get('/get/criador/',protect, notesController.getCriadorById);
router.get('/get/destinatario/',protect, notesController.getDestinatarioById);


router.delete('/delete/:id', protect, notesController.deleteById)


module.exports = router;