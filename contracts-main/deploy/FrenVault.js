module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer, dev } = await getNamedAccounts();

    const frenAddress = "0x6bD193Ee6D2104F14F94E2cA6efefae561A4334B"
  
    await deploy("FrenVault", {
      from: deployer,
      args: [frenAddress, "1000000000000000000"],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["FrenVault", "Vault"];