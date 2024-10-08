// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();
  
    await deploy("WPEPE", {
      from: deployer,
      args: [],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["WPEPE"];