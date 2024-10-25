// routes/userRoute.js
const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();


router.post('/add', createUser);
router.get('/', getAllUsers);         
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
