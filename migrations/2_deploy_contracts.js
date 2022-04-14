var TodoList = artifacts.require("../contracts/TodoApp.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};