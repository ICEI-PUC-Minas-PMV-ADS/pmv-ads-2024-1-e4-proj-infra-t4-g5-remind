const express = require("express")
const userController = require("../controllers/userController.js")
const protect = require("../middleware/auth.js")

const router = express.Router();

router.post('/criar',protect, userController.create);
router.post('/login', userController.login);

router.put('/update/:id', protect, userController.update)

router.get("/get",protect, userController.getAll)
router.get('/get/:id',protect, userController.getById)

router.delete('/delete/:id',protect, userController.deleteById)



module.exports = router;
