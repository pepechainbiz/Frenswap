// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();

    const token = "0xb08edc14bfe0eaf654371bf777f23ab06be542c6";
  
    await deploy("Faucet", {
      from: deployer,
      args: [token],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["Faucet"];