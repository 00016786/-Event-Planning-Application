// Users service - Services related to user operations

// Placeholder array for storing user data
let users = [];

const userService = {
  // Create a new user
  createUser: (userData) => {
    users.push(userData);
    return userData;
  },

  // Read all users
  getUsers: () => {
    return users;
  },

  // Read a single user by ID
  getUserById: (userId) => {
    return users.find(user => user.id === userId);
  },

  // Update a user
  updateUser: (userId, updatedUserData) => {
    let userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUserData };
      return users[userIndex];
    } else {
      return null;
    }
  },

  // Delete a user
  deleteUser: (userId) => {
    users = users.filter(user => user.id !== userId);
  }
};

module.exports = userService;
