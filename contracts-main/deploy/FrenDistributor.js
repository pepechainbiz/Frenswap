// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer, dev } = await getNamedAccounts();

    const frenAddress = (await deployments.get("FrenSwapToken")).address;
  
    await deploy("FrenDistributor", {
      from: deployer,
      args: [frenAddress, "60000000000000000000"],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["FrenDistributor", "Farming"];
  module.exports.dependencies = ["FrenSwapToken"];