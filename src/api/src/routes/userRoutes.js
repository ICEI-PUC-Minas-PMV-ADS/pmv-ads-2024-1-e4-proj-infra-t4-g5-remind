'use strict';
const express = require("express")
const userController = require("../controllers/userController.js")
const protect = require('../middleware/auth.js');
const validateRequest = require('../middleware/validateRequest.js');
const userSchema = require('../schemas/userSchema.js');
const router = express.Router();

router.post(
  '/criar',
  protect,
  validateRequest(userSchema.registerSchema),
  userController.create,
);
router.post(
  '/login',
  validateRequest(userSchema.loginSchema),
  userController.login,
);

router.put(
  '/update/:id',
  protect,
  validateRequest(userSchema.updateSchema),
  userController.update,
);

router.get('/get', protect, userController.getAll);

router.get('/get/:id', protect, userController.getById);

router.delete('/delete/:id', protect, userController.deleteById);

module.exports = router;