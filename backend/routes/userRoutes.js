const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authorizeUser = require('../middleware/authorizeUser');

router.get('/', authorizeUser, userController.getAllUsers);
router.get('/:id', authorizeUser, userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', authorizeUser, userController.updateUser);
router.delete('/:id', authorizeUser, userController.deleteUser);

module.exports = router;