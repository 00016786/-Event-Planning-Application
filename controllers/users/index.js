// Users controller - Logic related to user operations

// Import user service
const userService = require('../../services/users');

// Define controller functions
const usersController = {
  // Example controller function
  getUsers: (req, res) => {
    const users = userService.getUsers();
    res.json(users);
  },

  // Add more controller functions as needed
};

// Export the controller object
module.exports = usersController;
