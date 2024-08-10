// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();

    const token = "0x9CFfe912528B1e55d8b6471D7aE483f44eD655fB";
  
    await deploy("Faucet", {
      from: deployer,
      args: [token],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["Faucet"];