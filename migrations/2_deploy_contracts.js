var AdSeller = artifacts.require("./AdSeller.sol");

module.exports = function (deployer) {
  deployer.deploy(AdSeller);
};