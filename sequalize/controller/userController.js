
const User = require('../models/user');

// Create User
const createUser = async (req, res) => {
    if (!req.body || !req.body.name || !req.body.email) {
        return res.status(400).json({
            message: "Name and email are required."
        });
    }

    try {
        const { name, email } = req.body;
        const newUser = await User.create({ name, email });
        return res.status(201).json({
            message: 'User added successfully',
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error adding user',
            error: error.message
        });
    }
};

// Read All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error retrieving users',
            error: error.message
        });
    }
};

// Read User by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User retrieved successfully',
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error retrieving user',
            error: error.message
        });
    }
};

// Update User
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!req.body || (!req.body.name && !req.body.email)) {
        return res.status(400).json({
            message: "At least one of name or email is required."
        });
    }

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const updatedUser = await user.update(req.body);
        return res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating user',
            error: error.message
        });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        await user.destroy();
        return res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
