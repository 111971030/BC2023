// const Migrations = artifacts.require("Migrations");

//引入自定义合约
var MSHK = artifacts.require("MSHK");

module.exports = function (deployer) {
//   deployer.deploy(Migrations);

  //部署引入的自定义合约
  deployer.deploy(MSHK);
};