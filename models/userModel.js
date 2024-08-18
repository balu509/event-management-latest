const users = [];

const findUserByUsername = (username) => users.find(user => user.username === username);
const findUserById = (id) => users.find(user => user.id === id);
const addUser = (user) => users.push(user);

module.exports = { users, findUserByUsername, findUserById, addUser };